
// ============== header ===================
const header = document.createElement('header')
const header_top_block = document.createElement('div')
header_top_block.classList.add('header_top_block')
const logo = document.createElement('img')
logo.src = './images/logo1.png'
logo.alt = 'logo'
const h1 = document.createElement('h1')
h1.textContent = 'SLOGAN SLOGAN SLOGAN'
const nav = document.createElement('nav')
const menu = document.createElement('ul')
menu.classList.add('menu')
const menu_item_text = ['Главная', ' О приложении', ' О проекте', 'Скачать', 'Контакты']
for (let i = 0; i < 5; i++) {
    const li = document.createElement('li')
    const menu_item = document.createElement('a')
    menu_item.classList.add('menu_item')
    menu_item.textContent = menu_item_text[i]
    li.append(menu_item)
    menu.append(li)
}
// ==========================================
// ============= MAIN =======================
const main = document.createElement('main')
const quest_section = document.createElement('section')
quest_section.classList.add('quest_section')
for (let img = 0; img < 3; img++) {
    const quest_card = document.createElement('div')
    quest_card.classList.add('quest_card')
    const img_in_quest_card = document.createElement('img')
    img_in_quest_card.src = './images/que.png'
    img_in_quest_card.alt = 'photo'
    const p = document.createElement('p')
    p.textContent = 'Часто ли Вы опаздываете на работу (учёбу)?'
    quest_card.append(img_in_quest_card, p)
    quest_section.append(quest_card)
}
// ===========================================
const website = document.createElement('section')
website.classList.add('website')
const galery = document.createElement('div')
galery.classList.add('galery')
const galery_in_galery = document.createElement('div')
const galery1 = document.createElement('div')
galery1.classList.add('galery1')
const for_program = document.createElement('h2')
for_program.textContent = 'О приложении'
const img_in_galary1 = document.createElement('img')
img_in_galary1.src = "./images/photo.png"
img_in_galary1.alt = "photo"
galery1.append(for_program, img_in_galary1)
const galery2 = document.createElement('div')
galery2.classList.add('galery2')
const img_in_galary2 = document.createElement('img')
img_in_galary2.src = "./images/play-button.png"
img_in_galary2.alt = "play-button"
galery2.append(img_in_galary2)
galery_in_galery.append(galery1, galery2)
galery.append(galery_in_galery)
// ==========
const galery_gall = document.createElement('div')
galery_gall.classList.add('galery_gall')
const GALL_GALL = document.createElement('div')
GALL_GALL.classList.add('GALL_GALL')
const website_photo = document.createElement('div')
website_photo.classList.add('website_photo')
const colors = ["red", "green", "blue", "black", "gray"]
for (let website_photo_img = 0; website_photo_img < 5; website_photo_img++) {
    const img_in_website_photo = document.createElement('img')
    img_in_website_photo.src = "./images/question.png"
    img_in_website_photo.alt = "question"
    img_in_website_photo.classList.add(colors[website_photo_img])
    website_photo.append(img_in_website_photo)
}
GALL_GALL.append(website_photo)
galery_gall.append(GALL_GALL)
website.append(galery, galery_gall)
// ========================================================
const website_ph = document.createElement('section')
website_ph.classList.add('website_ph')
const h2_in_website_ph = document.createElement('h2')
h2_in_website_ph.textContent = 'О проекте'
const curs = document.createElement('p')
curs.classList.add('curs')
curs.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель.
Опытные бизнесмены,
инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от
разработки
идеи до ее реализации.`
website_ph.append(h2_in_website_ph, curs)
// ==========================================================
const beginners = document.createElement('section')
beginners.classList.add('beginners')
const h2_in_beginners = document.createElement('h2')

h2_in_beginners.textContent = 'Скачать'
const group = document.createElement('img')
group.src = "./images/Group 4.png"
group.alt = "group"
group.classList.add('group')
const reality = document.createElement('p')
reality.classList.add('reality')
reality.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за
6
недель.
Опытные бизнесмены,
инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от
разработки
идеи до ее реализации.`
beginners.append(h2_in_beginners, group, reality)
// ===================================================
// ========== Footer =======================
const footer_some = document.createElement('footer')
footer_some.classList.add('footer_some')
const some_footer = document.createElement('div')
some_footer.classList.add('some_footer')
const ftr = document.createElement('div')
ftr.classList.add('ftr')
const ftr_s = document.createElement('div')
ftr_s.classList.add('ftr_s')
const ftr_some = document.createElement('h2')
ftr_some.classList.add('ftr_some')
ftr_some.textContent = 'SOME'
ftr_s.append(ftr_some)
const ikon = document.createElement('div')
ikon.classList.add('ikon')
const img_in_ikon1 = document.createElement('img')
img_in_ikon1.src = "./images/vk.png"
img_in_ikon1.alt = "logo"
const img_in_ikon2 = document.createElement('img')
img_in_ikon2.src = "./images/instagram (1).png"
img_in_ikon2.alt = "logo"
const img_in_ikon3 = document.createElement('img')
img_in_ikon3.src = "./images/facebook.png"
img_in_ikon3.alt = "logo"
ikon.append(img_in_ikon1, img_in_ikon2, img_in_ikon3)
ftr.append(ftr_s, ikon)

// ===============================================
const ftr_somer = document.createElement('div')
ftr_somer.classList.add('ftr_somer')
const ftr_p = document.createElement('div')
ftr_p.classList.add('ftr_p')
const cont = document.createElement('h3')
cont.classList.add('cont')
cont.textContent = 'Контакты'
const tel_num = document.createElement('p')
tel_num.classList.add('tel_num')
tel_num.textContent = `Tel.: +996 (312) 915000 + Еxt.
Fax: +996 (312) 915 028`
ftr_p.append(cont, tel_num)
const ftr_bottom = document.createElement('div')
ftr_bottom.classList.add('ftr_bottom')
const conts = document.createElement('h3')
conts.classList.add('cont')
conts.textContent = 'Адреса'
const American = document.createElement('p')
American.classList.add('American')
American.textContent = `American University of Central Asia
7/6 Aaly Tokombaev Street
Bishkek, Kyrgyz Republic 720060`
ftr_bottom.append(conts, American)
const ftr_niz = document.createElement('div')
ftr_niz.classList.add('ftr_niz')
const contss = document.createElement('h3')
contss.classList.add('cont')
contss.textContent = 'Помощь'
const help = document.createElement('p')
help.classList.add('help')
help.textContent = 'Помощь Помощь Помощь'
ftr_niz.append(contss, help)
ftr_somer.append(ftr_p, ftr_bottom, ftr_niz)
some_footer.append(ftr, ftr_somer)











// ================ HTML =====================
const body = document.body
body.append(header, main, footer_some)
// =============== header ======================
header.append(header_top_block, nav)
header_top_block.append(logo, h1)
nav.append(menu)
// ====================  =====================
main.append(quest_section, website, website_ph, beginners)
// ============================
footer_some.append(some_footer)