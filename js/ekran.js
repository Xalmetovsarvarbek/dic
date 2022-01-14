const card=document.getElementById("card");
const uzb=document.getElementById("uzb");
const rus=document.getElementById("rus");
//const tezlik=(value)=> {return value*1000};


var vaqt1,
    vaqt2;
const Russifat=[
    'новый',
    'большой',
    'должный',
    'последний',
    'российский',
    'русский',
    'общий',
    'высокий',
    'хороший',
    'главный',
    'лучший',
    'маленький',
    'молодой',
    'государственный',
    'полный',
    'советский',
    'настоящий',
    'старый',
    'разный',
    'нужный',
    'белый',
    'собственный',
    'черный',
    'основной',
    'далекий',
    'подобный',
    'следующий',
    'равный',
    'живой',
    'известный',
    'военный',
    'важный',
    'великий',
    'простой',
    'огромный',
    'политический',
    'московский',
    'готовый',
    'красный',
    'современный',
    'социальный',
    'ранний',
    'особый',
    'целый',
    'плохой',
    'сильный',
    'скорый',
    'крупный',
    'внутренний',
    'экономический',
    'правый',
    'федеральный',
    'близкий',
    'похожий',
    'различный',
    'необходимый',
    'единственный',
    'легкий',
    'человеческий',
    'международный',
    'дорогой',
    'небольшой',
    'местный',
    'бывший',
    'американский',
    'широкий',
    'мировой',
    'тяжелый',
    'возможный',
    'отдельный',
    'средний',
    'красивый',
    'короткий',
    'серьезный',
    'интересный',
    'добрый',
    'национальный',
    'длинный',
    'страшный',
    'прошлый',
    'общественный',
    'детский',
    'единый',
    'определенный',
    'низкий',
    'чужой',
    'странный',
    'чистый',
    'поздний',
    'специальный',
    'научный',
    'сложный',
    'реальный',
    'способный',
    'малый',
    'старший',
    'личный',
    'свободный',
    'обычный',
    'прекрасный',
    'высший',
    'темный',
    'гражданский',
    'внешний',
    'боевой',
    'рабочий',
    'глубокий',
    'долгий',
    'прямой',
    'финансовый',
    'открытый',
    'знакомый',
    'нынешний',
    'исторический',
    'народный',
    'знаменитый',
    'больший',
    'пустой',
    'очередной',
    'судебный',
    'зеленый',
    'немецкий',
    'золотой',
    'технический',
    'нормальный',
    'городской',
    'соответствующий',
    'любимый',
    'родной',
    'западный',
    'быстрый',
    'холодный',
    'конкретный',
    'иностранный',
    'левый',
    'счастливый',
    'святой',
    'точный',
    'частый',
    'значительный',
    'связанный',
    'уверенный',
    'тонкий',
    'центральный',
    'будущий',
    'физический',
    'частный',
    'мелкий',
    'английский',
    'постоянный',
];
const Uzbsifat=[
'Янги',
'Катта',
'керакли',
'Охирги',
'Россиядан келтирилган',
'Русча',
'Умумий',
'Баланд',
'Яхши',
'Асосий',
'Энг яхши',
'Кичкина',
'Ёш',
'Давлат тасарруфидаги',
'Тўла',
'Совет даврига мансуб',
'Хақиқий',
'Эски',
'Хар – хил',
'Керакли',
'Оқ',
'Шахсий',
'Қора',
'Асосий',
'Узоқ',
'Ўхшаш',
'Навбатдаги',
'Тенг',
'Тирик',
'Машхур',
'жангавор',
'Муҳим',
'Буюк',
'Оддий',
'Баҳайбат',
'Сиёсий',
'Москвага таълуқли',
'Тайёр',
'Қизил',
'Замонавий',
'Ижтимоий',
'Эртанги',
'Алоҳида, бошқача',
'Бутун',
'Ёмон',
'Кучли',
'Тезкор',
'Йирик',
'Ички',
'Иқтисодий',
'Ўнг',
'Федерал',
'Яқин',
'Ўхшаш',
'Ранг- баранг',
'Зарур',
'Ягона',
'Енгил',
'Инсоний',
'Халқаро',
'Қиммат',
'Катта бўлмаган',
'Маҳаллий',
'Собиқ',
'Америкага оид',
'Кенг',
'Жаҳон миқёсида',
'Оғир',
'Мумкин бўлган',
'Алоҳида',
'Ўрта',
'Чиройли',
'Калта',
'Жиддий',
'Қизиқарли',
'Меғрибон',
'Миллий',
'Узун',
'Қўрқинчли',
'Ўтиб кетган',
'Ижтимоий',
'Болаларга оид',
'Ягона',
'Маълум , ўлчовли',
'Паст',
'Бегона',
'Ғалати',
'Тоза',
'Кечки',
'Махсус',
'Илмий',
'Мураккаб',
'Реал',
'Қобилиятли',
'Кичик',
'Тўнғич',
'Шахсий',
'Озод',
'Одатдаги',
'Гўзал',
'Юқори',
'Тўқ ранг',
'Фуқарога оид',
'Ташқи',
'Жангавор',
'Ишчи',
'Чуқур',
'Узоқ (вақтга нисбатан)',
'Тўғри, текис',
'Молиявий',
'Очиқ',
'Таниш',
'Хозирги',
'Тарихий',
'Халқона',
'Машҳур',
'Катта',
'Бўм-бўш',
'Навбатдаги',
'Судланаётган',
'Яшил',
'Немисларга оид',
'Тилла',
'Техник',
'Нормал',
'Шахарлик',
'Мос келадиган',
'Севимли',
'Туғишган',
'Ғарбий',
'Тез',
'Совуқ',
'Аниқ',
'чет мамлакатга доир',
'Чап',
'Бахтли',
'Авлиё',
'Аниқ',
'Тез-тез келадиган',
'Маълум даражада',
'Боғланган',
'Ўзига ишонган',
'Ингичка',
'Марказий',
'Келаётган',
'Жисмоний',
'Хусусий',
'Майда',
'Инглизларга оид',
'Доимий',
];
const Rusot=[
'год',
'человек',
'время',
'дело',
'жизнь',
'день',
'рука',
'раз',
'работа',
'слово',
'место',
'лицо',
'друг',
'глаза',
'вопрос',
'дом',
'сторона',
'страна',
'мир',
'случай',
'голова',
'ребёнок',
'сила',
'конец',
'вид',
'система',
'часть',
'город',
'отношение',
'женщина',
'деньги',
'земля',
'машина',
'вода',
'отец',
'проблема',
'Час, часы',
'право',
'нога',
'решение',
'Дверь',
'образ',
'история',
'власть',
'закон',
'война',
'бог',
'голос',
'тысяча',
'книга',
'возможность',
'результат',
'ночь',
'стол',
'имя',
'область',
'статья',
'число',
'компания',
'народ',
'жена',
'группа',
'развитие',
'процесс',
'суд',
'условие',
'средство',
'начало',
'свет',
'пора',
'путь',
'душа',
'уровень',
'форма',
'связь',
'минута',
'улица',
'вечер',
'качество',
'мысль',
'Дорога',
'Мать',
'Действие', 
'Месяц', 
'Государство', 
'Язык',
'Любовь', 
'Взгляд', 
'Мама', 
'Век', 
'Школа', 
'Цель',
'Общество', 
'Деятельность', 
'Организация',
'Президент', 
'Комната', 
'Порядок', 
'Момент', 
'Театр', 
'Письмо', 
'Утро', 
'Помощь', 
'Ситуация', 
'Роль', 
'Рубль', 
'Смысл', 
'Состояние', 
'Квартира', 
'Орган', 
'Тело', 
'Труд',
'Сын',
'Мера', 
'Смерть', 
'Рынок', 
'Программа', 
'Задача', 
'Предприятие', 
'Окно', 
'Разговор', 
'Правительство', 
'Семья', 
'Производство', 
'Внимание', 
'Информация', 
'Положение', 
'Центр', 
'Ответ', 
'Муж', 
'Автор', 
'Стена', 
'Интерес', 
'Федерация', 
'Правило', 
'Управление', 
'Мужчина', 
'Идея', 
'Совет', 
'Счёт', 
'Движение', 
'Сердце', 
'Вещь', 
'Материал', 
'Неделя', 
'Чувство', 
'Глава', 
'Наука', 
'Ряд', 
'Газета', 
'Причина', 
];
const Uzbot=[
'Йил',
'Инсон,одам',
'Вақт',
'Иш',
'Хаёт',
'Кун',
'Қўл',
'Кара, марта, мунча, сафар',
'Иш',
'Суз',
'Жой, ўрин',
'Юз, бет, шахс',
'Дўст',
'Кўзлар',
'Савол',
'Уй',
'Томон, тараф',
'Мамлакат',
'Олам,  жахон, тинчлик',
'Воқеа',
'Бош',
'Фарзанд',
'Куч',
'Якун, тамом',
'Кўриниш, манзара, лавха',
'Тартиб, усул',
'Қисм',
'шахар',
'Муносабат,алоқа',
'Аёл',
'Пул',
'Ер',
'Улов',
'Сув',
'Ота',
'Муаммо',
'Соат',
'Хуқуқ',
'Оёқ',
'Ечим',
'Эшик',
'Сиймо',
'Тарих',
'Хокимият, хукумат, салтанат',
'Қонун',
'Уруш, жанг',
'Худо',
'Овоз',
'Минг',
'Китоб',
'Имконият',
'Натижа',
'Тун',
'Стол',
'Исм, ном',
'Вилоят',
'Мақола',
'Сон, рақам',
'Жўралар, улфатлар, ўртоқлар',
'Халқ',
'Хотин, турмуш ўртоғи',
'Гурух',
'Ривожланиш',
'Жараён',
'Суд, судлов',
'Шароит, шарт- шароит',
'Восита',
'Бош, боши,бошланиш нуқтаси,бошланиш жойи',
'Ёруғлик',
'Пайт,кез,вақт',
'Йўл',
'Қалб',
'Даража',
'Шакл, тарз',
'Алоқа',
'Дақиқа',
'Кўча',
'Оқшом',
'Сифат',
'Фикр, хаёл',
'Йўл',
'Она',
'Харакат',
'Ой',
'Мамлакат',
'Тил',
'Севги',
'Қараш, нигох, назар',
'Она',
'Аср',
'Мактаб',
'Мақсад',
'Жамият',
'Фаолият',
'Ташкилот',
'Президент',
'Хона',
'Тартиб',
'Фурсат, лахза, пайт, он, кез',
'Театр, томоша',
'Хат, нома',
'Тонг',
'Ёрдам',
'Шароит',
'Роль', 
'Рубль', 
'Маъно, мантиқ',
'Холат', 
'Квартира, хонадон',
'Аъзо',
'Тана', 
'Мехнат', 
'Ўғил',
'Ўлчам', 
'Ўлим', 
'Бозор', 
'Дастур', 
'Масала', 
'Корхона',
'Дераза',
'Сухбат',
'Хукумат', 
'Оила', 
'Ишлаб чиқариш',
'Эътибор',
'Маълумот',
'Ахвол, хол, холат, мавқе, вазият',
'Марказ',
'Жавоб',
'Эр',
'Муаллиф',
'Девор', 
'Қизиқиш', 
'Уюшма, иттифоқ',
'Қоида',
'Бошқарма, бошқарув, идора',
'Эркак',
'Ғоя',
'Маслаҳат',
'Хисоб',
'Харакат',
'Юрак',
'Нарса',
'Маълумот; мато',
'Хафта',
'Туйғу',
'Боб; бошлиқ',
'Фан',
'Қатор',
'Рўзнома',
'Сабаб',
];
const Rusfel=[
    'Мочь', 
    'Сказать', 
    'Говорить',
    'Знать', 
    'стать',
    'хотеть',
    'идти',
    'иметь',
    'видеть',
    'думать',
    'сделать',
    'жить',
    'делать',
    'смотреть',
    'работать',
    'понять',
    'пойти',
    'спросить',
    'дать',
    'понимать',
    'получить',
    'сидеть',
    'оказаться',
    'взять',
    'прийти',
    'являться',
    'любить',
    'стоить',
    'остаться',
    'выйти',
    'начать',
    'считать',
    'увидеть',
    'казаться',
    'писать',
    'найти',
    'стоять',
    'решить',
    'пройти',
    'принять',
    'давать',
    'ответить',
    'помнить',
    'ждать',
    'находиться',
    'написать',
    'оставаться',
    'играть',
    'лежать',
    'подумать',
    'уйти',
    'посмотреть',
    'вернуться',
    'следовать',
    'читать',
    'бывать',
    'ходить',
    'начинать',
    'появиться',
    'называть',
    'прийти',
    'хотеться',
    'вести',
    'показать',
    'поставить',
    'бояться',
    'происходить',
    'существовать',
    'становиться',
    'слышать',
    'смочь',
    'заметить',
    'использовать',
    'пытаться',
    'представить',
    'чувствовать',
    'создать',
    'заниматься',
    'продолжать',
    'слушать',
    'узнать',
    'приехать',
    'отвечать',
    'рассказывать',
    'рассказать',
    'представлять',
    'брать',
    'забыть',
    'провести',
    'спать',
    'помочь',
    'приходить',
    'просить',
    'вспомнить',
    'открыть',
    'привести',
    'оставить',
    'спрашивать',
    'принимать',
    'искать',
    'войти',
    'назвать',
    'успеть',
    'произойти',
    'выходить',
    'предложить',
    'пить',
    'глядеть',
    'ехать',
    'попасть',
    'начаться',
    'верить',
    'держать',
    'позволять',
    'купить',
    'уходить',
    'собираться',
    'относиться',
    'требовать',
    'подойти',
    'удаться',
    'получать',
    'умереть',
    'сесть',
    'случиться',
    'проходить',
    'составлять',
    'приходиться',
    'установить',
    'поднять',
    'стараться',
    'уметь',
    'встать',
    'проводить',
    'бросить',
    'объяснить',
    'снять',
    'нравиться',
    'услышать',
    'связать',
    'позволить',
    'поехать',
    'положить',
    'входить',
    'оказываться',
    'показывать',
    'вызвать',
    'касаться',
    'отметить',
    'заявить',
];
const Uzbfel=[
'Қилмоқ',
'Айтмоқ',
'Гапирмоқ',
'Билмоқ',
'Бўлмоқ',
'Хохламоқ',
'Бормоқ',
'Эга бўлмоқ',
'Кўрмоқ',
'Ўйламоқ',
'Қилмоқ',
'Яшамоқ',
'Қилмоқ',
'Томоша қилмоқ',
'Ишламоқ',
'Тушунмоқ',
'Бормоқ (бўлишли феъл)',
'Сўрамоқ',
'Бермоқ',
'Тушунмоқ',
'Қабул қилмоқ',
'Ўтирмоқ',
'Пайдобўлмоқ',
'Олмоқ',
'Келмоқ',
'Келмоқ, бўлмоқ',
'Севмоқ',
'Tурмоқ(нархга нисбатан)',
'Қолмоқ',
'Чиқмоқ',
'Бошламоқ',
'Санамоқ',
'Кўриб қолмоқ(св.вид)',
'Туйилмоқ',
'Ёзмоқ',
'Топмоқ',
'Турмоқ',
'Хал қилмоқ',
'Ўтмоқ,босиб ўтмоқ',
'Қабул қилмоқ',
'Бермоқ',
'Жавоб бермоқ',
'Эсламоқ',
'Кутмоқ',
'Жойлашмоқ',
'Ёзмоқ',
'Қолмоқ',
'Ўйнамоқ',
'Ётмоқ',
'Ўйнамоқ',
'Кетмоқ',
'Кўрмоқ',
'Қайтмоқ',
'Изидан бормоқ',
'Ўқимоқ',
'Бўлмоқ',
'Юрмоқ',
'Бошламоқ',
'Пайдо бўлиб қолмоқ',
'Номламоқ',
'Келмоқ',
'Хохламоқ',
'Етакламоқ',
'Кўрсатмоқ',
'Қўймоқ',
'Қўрқмоқ',
'Рўй бермоқ',
'Яшамоқ',
'Шаклланмоқ',
'Эшитмоқ',
'Қила олмоқ',
'Фахмламоқ',
'Фойдаланмоқ',
'Уринмоқ',
'Тақдим қилмоқ',
'Ҳис қилмоқ',
'Яратмоқ',
'Шуғулланмоқ',
'Давом эттирмоқ',
'Тингламоқ',
'Билиб олмоқ',
'Келмоқ (машинада)',
'Жавоб бермоқ',
'Сўзламоқ',
'Хикоя қилиб бермоқ',
'Тақдим қилмоқ',
'Олмоқ',
'Эсдан чиқармоқ',
'Олиб ўтмоқ',
'Ухламоқ',
'Ёрдам бермоқ',
'Келмоқ',
'Сўрамоқ,илтимос қилмоқ,ўтинмоқ',
'Эсга олмоқ',
'Очмоқ',
'Олиб келмоқ',
'Қолдирмоқ',
'Сўрамоқ',
'Қабул қилмоқ',
'Қидирмоқ',
'Кирмоқ',
'Номламоқ',
'Улгурмоқ',
'Рўй бермоқ',
'Чиқмоқ',
'Таклиф қилмоқ',
'Ичмоқ',
'Қарамоқ',	
'Бормоқ (машинада)',
'Кирмоқ, тушмоқ, тегмоқ',
'Бошланмоқ',
'Ишонмоқ ',
'Ушлаб турмоқ',
'Рухсат бермоқ',
'Сотиб олмоқ',
'Кетмоқ',
'Йиғинмоқ',
'Муносабатда бўлмоқ',
'Талаб қилмоқ',
'Яқинлашмоқ',
'Ушалмоқ',
'Қабул қилмоқ',
'Ўлмоқ',
'Ўтирмоқ',
'Рўй бермоқ',
'Ўтмоқ',
'Тузмоқ',
'Бўлмоқ',
'Ўрнатмоқ',
'Кўтармоқ',
'Ҳаракат қилмоқ',
'Қила олмоқ',
'Турмоқ',
'Ўтказмоқ',
'Ташламоқ, отмоқ',
'Тушунтирмоқ',
'Ечмоқ',
'Ёқтирмоқ',
'Эшитмоқ',
'Боғламоқ',
'Рухсат бермоқ',
'Машинада бормоқ',
'Қўймоқ',
'Кирмоқ',
'Пайдо бўлмоқ',
'Кўрсатмоқ',
'Чақирмоқ',
'Тегмоқ',
'Белгиламоқ',
'Эълон қилмоқ',
];
var count=0;
var coun=0;

function natija()
{   const boshi=document.getElementById("boshi").value;
    const oxiri=document.getElementById("oxiri").value;
    const ot=document.getElementById("ot").checked;
   // const Speed=tezlik();
    const sifat=document.getElementById("sifat").checked;
    const fel=document.getElementById("fel").checked;
    count=boshi*1+coun*1;
// let tanlov=Math.trunc(Math.random()*40);
// uzb.innerText=Uzbadj[tanlov];
// rus.innerText=Rusadj[tanlov];

if (ot){
    uzb.innerText=Uzbot[count];
    rus.innerText=Rusot[count];};

if (sifat){
    uzb.innerText=Uzbsifat[count];
    rus.innerText=Russifat[count];};

if (fel){
    uzb.innerText=Uzbfel[count];
    rus.innerText=Rusfel[count];};
coun++;
if ((count>=(oxiri*1))) {coun=0;}
vaqt1=setTimeout(natija,6000);
}

var mantiq=true;
function vaqt(){
    if (mantiq) {card.style.transform="rotateY(180deg)";mantiq=false} else {
        card.style.transform="rotateY(0deg)";mantiq=true    
    }
vaqt2=setTimeout(vaqt,Math.trunc(3000)); 
}
function timeout(){
clearTimeout(vaqt1);
clearTimeout(vaqt2);
coun=0;
}
