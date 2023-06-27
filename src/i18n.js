import i18next from "i18next";

import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    home: 'Home',
                    welcome: 'Welcome to a world where taste and beauty are one!',
                    and: 'And now I invite you to plunge into a real paradise of sweets, where each dessert is a real genuine work of art, created with love and attention to every detail.  Embark on an unforgettable journey into the world of delicate creams, crispy cakes and impeccable taste that will delight you!',
                    about: 'About',
                    hi: 'Hi, Im Molfarka',
                    molfars: 'Molfars are the bearers of ancient wisdom and guardians of the Carpathian reserves in Ukrainian mythology. By preserving their ancient traditions, they infuse their creations with positive energy and forest gifts. On meadows and in forests at any time of the year, I gather medicinal plants to reveal their properties and give them to people.For each cake and pastry, I have an individual approach. From the selection of ingredients and proportions to the decoration and packaging, everything stands out with a unique style that will help you transport yourself into the magic of the Carpathian reserves.',
                    works: 'Works',
                    workbook: 'WorkBook',
                    contact: 'Contact',
                    submit: 'Submit the form below or send me an email - liketime.vika@gmail.com',
                    name: 'Name',
                    lets: 'Let\'s Work',
                    email:'E-mail'
                }
            },
            fr:{
                translation: {
                    home: 'Accueil',
                    welcome: 'Bienvenue dans un monde où le goût et la beauté ne font qu\'un !',
                    and: 'Et maintenant, je vous invite à plonger dans un véritable paradis de douceurs, où chaque dessert est une véritable œuvre d\'art authentique, créée avec amour et une attention portée à chaque détail. Embarquez pour un voyage inoubliable dans le monde des crèmes délicates, des gâteaux croustillants et du goût impeccable qui vous raviront !',
                    about: 'Qui suis-je',
                    hi: 'Salut, je suis Molfarka',
                    molfars: 'Les Molfars sont les porteurs de la sagesse ancienne et les gardiens des réserves des Carpates dans la mythologie ukrainienne. En préservant leurs traditions anciennes, ils imprègnent leurs créations d\'énergie positive et de dons de la forêt.Sur les prairies et dans les forêts à tout moment de l\'année, je cueille des plantes médicinales pour révéler leurs propriétés et les offrir aux gens.Pour chaque gâteau et pâtisserie, j\'ai une approche individuelle. De la sélection des ingrédients et des proportions à la décoration et à l\'emballage, tout se distingue par un style unique qui vous transportera dans la magie des réserves des Carpates.',
                    works: 'Œuvres',
                    workbook: 'Cahier d\'exercices ',

                    contact: 'Contact',
                    submit: 'Remplissez le formulaire ci-dessous ou envoyez-moi un e-mail à l\'adresse liketime.vika@gmail.com.',
                    name: 'Nom',
                    lets: 'Au travail',
                    email:'E-mail'
                }
            },
            ua:{
                translation: {
                    home: 'Головна',
                    welcome: 'Ласкаво просимо до світу, де смак та краса зливаються воєдино!',
                    and: 'А зараз я запрошую вас зануритись у справжній рай солодощів, де кожний десерт - це справжнє мистецтво, створене з любові та уваги до кожної деталі. Відправляйтеся у незабутню подорож у світ ніжних кремів, хрустких тортів та неперевершеного смаку, який вас захопить!',
                    about: 'Хто я є',
                    hi: 'Привіт, я Мольфарка.',
                    molfars: 'Мольфари є носіями давньої мудрості та опікуни заповідників Карпат у українській міфології. Зберігаючи свої стародавні традиції, вони наповнюють свої творіння позитивною енергією та дарами лісу. На луках та в лісах протягом всього року я збираю лікарські рослини, щоб розкрити їх властивості та пропонувати їх людям. Для кожного торта та випічки я маю індивідуальний підхід. Від вибору інгредієнтів та пропорцій до декору та упаковки, все відрізняється унікальним стилем, що перенесе вас до магії заповідників Карпат.',
                    works: 'Витвори',
                    workbook: 'Портфоліо',

                    contact: 'Зв\'язок',
                    submit: 'Заповніть форму нижче або надішліть мені електронного листа на адресу liketime.vika@gmail.com.',
                    name: 'Ім\'я',
                    lets: 'До роботи',
                    email:'Електронна пошта',
                    Message: 'Написати',
                }
            }
        }
    })