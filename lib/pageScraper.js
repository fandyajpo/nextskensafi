import { skensaApiClient } from 'lib/ctx'

const scraperObject = {
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  },
  async getDataMurid(browserInstance, username, password, token, privatetoken) {
    let browser = await browserInstance;
    let page = await browser.newPage();

    await page.goto(`https://belajar.smkn1denpasar.sch.id/login/index.php`, {waitUntil: "networkidle2"});
    await page.content();

    await page.type('input[name="username"]', username)
    await page.type('input[name="password"]', password)

    const loginButton = await page.$('button[type="submit"]');
    if (loginButton) {
      await Promise.all([page.waitForNavigation(), loginButton.click()]);
    }
    await page.content();

    const tes = async () => {
      let pageGrupos = await browser.newPage();
      await pageGrupos.goto(`https://belajar.smkn1denpasar.sch.id/grade/report/overview/index.php`, {waitUntil: "networkidle2"});
      await pageGrupos.content();
      return await pageGrupos.evaluate(() => Array.from(document.getElementsByTagName('h3'), e => e.textContent));
    }

    const tesSec = async () => {
      let pageProfile = await browser.newPage();
      await pageProfile.goto(`https://belajar.smkn1denpasar.sch.id/user/profile.php`, {waitUntil: "networkidle2"});
      await pageProfile.content();
      return await pageProfile.evaluate(() => Array.from(document.getElementsByTagName('h1'), e => e.textContent));
    }

    const [attr, pGrupos, pProfile] = await Promise.all([
      page.$$eval("div.h-100", el => el.map(x => x.getAttribute("data-user-id"))),
      tes(),
      tesSec()
    ])

    const userId = attr[2]
    const nama = pProfile[0];
    const type = (pGrupos[1] === 'Saya mengajar' ? 'guru' : ( pGrupos[1] === 'kursus yang saya ikuti' ? 'murid' : 'admin'))

    var course
    if (type === 'murid') {

      const checkCourse = await skensaApiClient.get(
        `webservice/rest/server.php`,
        {
          params: {
            wsfunction: 'core_enrol_get_users_courses',
            moodlewsrestformat: 'json',
            wstoken: token,
            userid: userId
          }
        }
      );

      course = checkCourse.data;

      const someFunction = (myArray) => {
        const promises = myArray.map(async (v, i) => {
          const tugas = await skensaApiClient.get(
            `webservice/rest/server.php`,
            {
              params: {
                wsfunction: 'core_course_get_contents',
                courseid: v.id,
                moodlewsrestformat: 'json',
                wstoken: token
              }
            }
          );
          course[i].detail = tugas.data
          return
        });
        return Promise.all(promises);
      }

      await someFunction(course)

    }

    const ret = {
      nama: nama,
      type: type,
      course: course,
      userId: userId
    }

    // await this.sleep(1200);
    await browser.close();
    return ret
  },
}

module.exports = scraperObject;
