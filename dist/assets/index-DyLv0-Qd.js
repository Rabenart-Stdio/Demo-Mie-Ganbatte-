(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const k=[{id:"ALL",name:"Semua Menu",count:20},{id:"RAMEN CHILI OIL",name:"Ramen Chili Oil",count:4},{id:"MIE CHILI OIL",name:"Mie Chili Oil",count:6},{id:"CLASSIC",name:"Classic Series",count:2},{id:"WONTON",name:"Wonton Bara",count:3},{id:"ADD-ON",name:"Add-On",count:5}],l=[{id:"ramen-chili-oil-supreme",name:"Ramen Chili Oil Supreme",category:"RAMEN CHILI OIL",series:"Signature Line",description:"Kuah kaldu ayam pedas gurih dengan racikan rempah chili oil.",price:"Level 1: Rp16.500 | Level 2, 5, 8: Rp17.500",priceRange:"Rp16.500 – Rp17.500",priceNumber:16500,priceLevels:{"Level 1":"Rp16.500","Level 2, 5, 8":"Rp17.500"},spicyLevels:[1,2,5,8],badge:"BEST SELLER",isBestSeller:!0,isSpicy:!0,spicyNote:"Lv 1, 2, 5, 8",image:"assets/dish-ramen-supreme.jpg",suggestedAddons:["Ajitama","Gyoza Kukus","Hiniku"]},{id:"ramen-chili-oil-gochujang",name:"Ramen Chili Oil Gochujang",category:"RAMEN CHILI OIL",series:"Signature Line",description:"Kuah kaldu ayam gurih dengan perpaduan gochujang dan chili oil.",price:"Level 1: Rp16.500 | Level 2, 5, 8: Rp17.500",priceRange:"Rp16.500 – Rp17.500",priceNumber:16500,priceLevels:{"Level 1":"Rp16.500","Level 2, 5, 8":"Rp17.500"},spicyLevels:[1,2,5,8],badge:"PEDAS",isBestSeller:!1,isSpicy:!0,spicyNote:"Lv 1, 2, 5, 8",image:"assets/dish-ramen-gochujang.jpg",suggestedAddons:["Ajitama","Saus Keju"]},{id:"ramen-chili-oil-nusantara",name:"Ramen Chili Oil Nusantara",category:"RAMEN CHILI OIL",series:"Signature Line",description:"Kuah kaldu ayam gurih dengan rasa pedas manis khas Indonesia.",price:"Level 1: Rp16.500 | Level 2, 5, 8: Rp17.500",priceRange:"Rp16.500 – Rp17.500",priceNumber:16500,priceLevels:{"Level 1":"Rp16.500","Level 2, 5, 8":"Rp17.500"},spicyLevels:[1,2,5,8],badge:"PEDAS",isBestSeller:!1,isSpicy:!0,spicyNote:"Lv 1, 2, 5, 8",image:"assets/dish-ramen-nusantara.jpg",suggestedAddons:["Ajitama","Gyoza Kukus"]},{id:"ramen-chili-oil-tantanmen",name:"Ramen Chili Oil Tantanmen",category:"RAMEN CHILI OIL",series:"Signature Line",description:"Kuah kaldu ayam creamy gurih dengan wijen dan rempah khas Tantanmen.",price:"Level 1: Rp16.500 | Level 2, 5, 8: Rp17.500",priceRange:"Rp16.500 – Rp17.500",priceNumber:16500,priceLevels:{"Level 1":"Rp16.500","Level 2, 5, 8":"Rp17.500"},spicyLevels:[1,2,5,8],badge:"PEDAS",isBestSeller:!1,isSpicy:!0,spicyNote:"Lv 1, 2, 5, 8",image:"assets/dish-ramen-tantanmen.jpg",suggestedAddons:["Ajitama","Hiniku"]},{id:"shoyu-ramen",name:"Shoyu Ramen",category:"CLASSIC",series:"Classic Series",description:"Kaldu ayam asin gurih yang ringan dan nikmat, tidak pedas.",price:"Rp16.500",priceRange:"Rp16.500",priceNumber:16500,priceLevels:{Standar:"Rp16.500"},spicyLevels:[],badge:"TIDAK PEDAS",isBestSeller:!1,isSpicy:!1,spicyNote:"Non-Spicy",image:"assets/dish-shoyu-ramen.jpg",suggestedAddons:["Ajitama","Gyoza Kukus"]},{id:"paitan-katsuobushi",name:"Paitan Katsuobushi",category:"CLASSIC",series:"Classic Series",description:"Kaldu seafood creamy, lembut, dan gurih dengan aroma khas katsuobushi.",price:"Rp16.500",priceRange:"Rp16.500",priceNumber:16500,priceLevels:{Standar:"Rp16.500"},spicyLevels:[],badge:"TIDAK PEDAS",isBestSeller:!1,isSpicy:!1,spicyNote:"Non-Spicy",image:"assets/dish-paitan-katsuobushi.jpg",suggestedAddons:["Ajitama","Gyoza Kukus"]},{id:"mie-ganbatte-goreng",name:"Mie Ganbatte Goreng",category:"MIE CHILI OIL",series:"Mie Chilli Oil Series",description:"Mie chili oil rasa gurih pedas dengan sentuhan mala yang memberikan rasa umami.",price:"Level 1: Rp11.000 | Level 2, 5, 8: Rp12.000",priceRange:"Rp11.000 – Rp12.000",priceNumber:11e3,priceLevels:{"Level 1":"Rp11.000","Level 2, 5, 8":"Rp12.000"},spicyLevels:[1,2,5,8],badge:"BEST SELLER",isBestSeller:!0,isSpicy:!0,spicyNote:"Lv 1, 2, 5, 8",image:"assets/dish-mie-goreng.jpg",suggestedAddons:["Ajitama","Gyoza Kukus","Saus Keju"]},{id:"mie-ganbatte-nyemek",name:"Mie Ganbatte Nyemek",category:"MIE CHILI OIL",series:"Mie Chilli Oil Series",description:"Mie setengah basah dengan chili oil, rasa gurih, dan sensasi pedas mala.",price:"Level 1: Rp11.000 | Level 2, 5, 8: Rp12.000",priceRange:"Rp11.000 – Rp12.000",priceNumber:11e3,priceLevels:{"Level 1":"Rp11.000","Level 2, 5, 8":"Rp12.000"},spicyLevels:[1,2,5,8],badge:"PEDAS",isBestSeller:!1,isSpicy:!0,spicyNote:"Lv 1, 2, 5, 8",image:"assets/dish-mie-nyemek.jpg",suggestedAddons:["Ajitama","Hiniku"]},{id:"mie-gaspol",name:"Mie Gaspol",category:"MIE CHILI OIL",series:"Mie Chilli Oil Series",description:"Mie chili oil dengan rasa pedas manis khas Nusantara.",price:"Level 1: Rp11.000 | Level 2, 5, 8: Rp12.000",priceRange:"Rp11.000 – Rp12.000",priceNumber:11e3,priceLevels:{"Level 1":"Rp11.000","Level 2, 5, 8":"Rp12.000"},spicyLevels:[1,2,5,8],badge:"BEST SELLER",isBestSeller:!0,isSpicy:!0,spicyNote:"Lv 1, 2, 5, 8",image:"assets/dish-mie-gaspol.jpg",suggestedAddons:["Ajitama","Gyoza Kukus","Saus Mentai"]},{id:"mie-gokil",name:"Mie Gokil!",category:"MIE CHILI OIL",series:"Mie Chilli Oil Series",description:"Mie tidak pedas dengan pilihan rasa asin atau manis.",price:"Rp11.000",priceRange:"Rp11.000",priceNumber:11e3,priceLevels:{"Asin / Manis":"Rp11.000"},options:["Asin","Manis"],spicyLevels:[],badge:"TIDAK PEDAS",isBestSeller:!1,isSpicy:!1,spicyNote:"Non-Spicy (Asin / Manis)",image:"assets/dish-mie-gokil.jpg",suggestedAddons:["Ajitama","Gyoza Kukus"]},{id:"mie-gaskeun",name:"Mie Gaskeun!",category:"MIE CHILI OIL",series:"Mie Chilli Oil Series",description:"Mie chili oil dengan rasa pedas wijen.",price:"Level 1: Rp11.000 | Level 2, 5, 8: Rp12.000",priceRange:"Rp11.000 – Rp12.000",priceNumber:11e3,priceLevels:{"Level 1":"Rp11.000","Level 2, 5, 8":"Rp12.000"},spicyLevels:[1,2,5,8],badge:"PEDAS",isBestSeller:!1,isSpicy:!0,spicyNote:"Lv 1, 2, 5, 8",image:"assets/dish-mie-gaskeun.jpg",suggestedAddons:["Ajitama","Hiniku"]},{id:"mie-gochujang",name:"Mie Gochujang",category:"MIE CHILI OIL",series:"Mie Chilli Oil Series",description:"Mie dengan gochujang yang pedas, manis, dan gurih.",price:"Level 1: Rp11.000 | Level 2, 5, 8: Rp12.000",priceRange:"Rp11.000 – Rp12.000",priceNumber:11e3,priceLevels:{"Level 1":"Rp11.000","Level 2, 5, 8":"Rp12.000"},spicyLevels:[1,2,5,8],badge:"PEDAS",isBestSeller:!1,isSpicy:!0,spicyNote:"Lv 1, 2, 5, 8",image:"assets/dish-mie-gochujang.jpg",suggestedAddons:["Ajitama","Saus Keju"]},{id:"wonton-goreng",name:"Wonton Goreng",category:"WONTON",series:"Wonton Bara",description:"Wonton dengan tekstur renyah di luar dan isian gurih.",price:"Level 1: Rp11.000 | Level 2–3: Rp12.000",priceRange:"Rp11.000 – Rp12.000",priceNumber:11e3,priceLevels:{"Level 1":"Rp11.000","Level 2–3":"Rp12.000"},spicyLevels:[1,2,3],badge:"PEDAS",isBestSeller:!1,isSpicy:!0,spicyNote:"Lv 1, 2, 3",image:"assets/dish-wonton-goreng.jpg",suggestedAddons:["Saus Mentai","Saus Keju"]},{id:"wonton-rebus",name:"Wonton Rebus",category:"WONTON",series:"Wonton Bara",description:"Wonton lembut yang direbus dengan tekstur ringan dan gurih.",price:"Level 1: Rp11.000 | Level 2–3: Rp12.000",priceRange:"Rp11.000 – Rp12.000",priceNumber:11e3,priceLevels:{"Level 1":"Rp11.000","Level 2–3":"Rp12.000"},spicyLevels:[1,2,3],badge:"PEDAS",isBestSeller:!1,isSpicy:!0,spicyNote:"Lv 1, 2, 3",image:"assets/dish-wonton-rebus.jpg",suggestedAddons:["Ajitama","Hiniku"]},{id:"wonton-kuah",name:"Wonton Kuah",category:"WONTON",series:"Wonton Bara",description:"Wonton lembut yang disajikan dengan kuah hangat.",price:"Level 1: Rp11.000 | Level 2–3: Rp12.000",priceRange:"Rp11.000 – Rp12.000",priceNumber:11e3,priceLevels:{"Level 1":"Rp11.000","Level 2–3":"Rp12.000"},spicyLevels:[1,2,3],badge:"PEDAS",isBestSeller:!1,isSpicy:!0,spicyNote:"Lv 1, 2, 3",image:"assets/dish-wonton-kuah.jpg",suggestedAddons:["Ajitama","Gyoza Kukus"]},{id:"ajitama",name:"Ajitama",category:"ADD-ON",series:"Add-On",description:"Telur ramen dengan pilihan tingkat kematangan.",price:"1/2: Rp3.500 | 1: Rp6.000",priceRange:"Rp3.500 – Rp6.000",priceNumber:3500,priceLevels:{"1/2 Butir":"Rp3.500","1 Butir Utuh":"Rp6.000"},spicyLevels:[],badge:"",isBestSeller:!1,isSpicy:!1,spicyNote:"Topping Favorit",image:"assets/dish-addon-ajitama.jpg",suggestedAddons:[]},{id:"hiniku",name:"Hiniku",category:"ADD-ON",series:"Add-On",description:"Ayam cincang sebagai tambahan topping.",price:"Rp5.000",priceRange:"Rp5.000",priceNumber:5e3,priceLevels:{Porsi:"Rp5.000"},spicyLevels:[],badge:"",isBestSeller:!1,isSpicy:!1,spicyNote:"Topping Gurih",image:"assets/dish-addon-hiniku.jpg",suggestedAddons:[]},{id:"gyoza-kukus",name:"Gyoza Kukus",category:"ADD-ON",series:"Add-On",description:"Gyoza kukus sebagai tambahan pendamping.",price:"Rp4.000",priceRange:"Rp4.000",priceNumber:4e3,priceLevels:{Porsi:"Rp4.000"},spicyLevels:[],badge:"",isBestSeller:!1,isSpicy:!1,spicyNote:"Dimsum Pendamping",image:"assets/dish-addon-gyoza.jpg",suggestedAddons:[]},{id:"saus-keju",name:"Saus Keju",category:"ADD-ON",series:"Add-On",description:"Tambahan saus keju creamy.",price:"Rp5.000",priceRange:"Rp5.000",priceNumber:5e3,priceLevels:{Porsi:"Rp5.000"},spicyLevels:[],badge:"",isBestSeller:!1,isSpicy:!1,spicyNote:"Creamy Cheese",image:"assets/dish-addon-gyoza.jpg",isSauce:!0,suggestedAddons:[]},{id:"saus-mentai",name:"Saus Mentai",category:"ADD-ON",series:"Add-On",description:"Tambahan saus mentai creamy dan gurih.",price:"Rp5.000",priceRange:"Rp5.000",priceNumber:5e3,priceLevels:{Porsi:"Rp5.000"},spicyLevels:[],badge:"",isBestSeller:!1,isSpicy:!1,spicyNote:"Savory Mentai",image:"assets/dish-addon-gyoza.jpg",isSauce:!0,suggestedAddons:[]}],R=[{level:1,label:"MILD",peppers:1,description:"Pedas santai dan ramah di lidah dengan aroma rempah chili oil yang wangi.",suitableFor:"Ramen Chili Oil, Mie Chili Oil, Wonton Bara",color:"#F5C518",intensityPercent:20},{level:2,label:"MEDIUM",peppers:2,description:"Sensasi pedas gurih seimbang yang mulai menendang dan bikin nagih.",suitableFor:"Ramen Chili Oil, Mie Chili Oil, Wonton Bara",color:"#F47A20",intensityPercent:40},{level:3,label:"WONTON BARA",peppers:3,description:"Tingkat pedas maksimal khusus seri Wonton Bara untuk sensasi renyah/lembut pedas nendang.",suitableFor:"Wonton Goreng, Wonton Rebus, Wonton Kuah",color:"#E25822",intensityPercent:60,specialTag:"KHUSUS WONTON"},{level:5,label:"HOT",peppers:5,description:"Pedas membara dengan sensasi mala dan chili oil pekat untuk pecinta pedas sejati.",suitableFor:"Ramen Chili Oil, Mie Chili Oil",color:"#D92727",intensityPercent:80},{level:8,label:"EXTREME",peppers:8,description:"Puncak kepedasan ekstrem Mie Ganbatte! Sensasi pedas nendang maksimal yang membakar selera.",suitableFor:"Ramen Chili Oil, Mie Chili Oil",color:"#990000",intensityPercent:100,isExtreme:!0}],S=[l.find(t=>t.id==="ramen-chili-oil-supreme"),l.find(t=>t.id==="mie-ganbatte-goreng"),l.find(t=>t.id==="mie-gaspol")],y=[{id:"malang",name:"Mie Ganbatte Malang",city:"MALANG",cityDisplay:"Malang",address:"Jl. Soekarno Hatta PTP II No.4, Kota Malang",googleMaps:"https://www.google.com/maps?q=-7.9376021,112.6255301&z=18",whatsapp:"https://wa.me/6285191291883?text=Halo%20Mie%20Ganbatte%20Malang,%20saya%20mau%20order",whatsappRaw:"whatsapp://send?phone=6285191291883&text=",menuDrive:"https://drive.google.com/file/d/1ND_rmcmUEjFkfqbT_SjKLTnT2omGEuk0/view",platforms:[{id:"gojek",name:"GoFood",url:"https://gofood.co.id/malang/restaurant/mie-ganbatte-suhat-by-ganbatte-kitchen-c1aaaf6c-74b8-47eb-8d41-cedcd1588905",color:"#00AA13",icon:"gojek"},{id:"grab",name:"GrabFood",url:"https://food.grab.com/id/id/restaurant/mie-ganbatte-by-ganbatte-kitchen-suhat-delivery/6-C7ATPFDZCAKAJ6",color:"#00B14F",icon:"grab"},{id:"shopee",name:"ShopeeFood",url:"https://shopee.co.id/now-food/shop/22006680?shareChannel=copy_link&stm_medium=referral&stm_source=https%3A%2F%2Ftaplink.cc%2F-rw&uls_trackid=56o9n12q00td",color:"#EE4D2D",icon:"shopee"}]},{id:"gresik",name:"Mie Ganbatte Gresik",city:"GRESIK",cityDisplay:"Gresik",address:"Jl. Nasrun Baru 320-321, Ijen Barat, Gresik",googleMaps:"https://www.google.com/maps?q=-7.1647606,112.6437377&z=18",whatsapp:"https://wa.me/6282264932376?text=Halo%20Mie%20Ganbatte%20Gresik,%20saya%20mau%20order",whatsappRaw:"whatsapp://send?phone=6282264932376&text=",menuDrive:"https://drive.google.com/file/d/1ND_rmcmUEjFkfqbT_SjKLTnT2omGEuk0/view",platforms:[{id:"gojek",name:"GoFood",url:"https://gofood.co.id/surabaya/restaurant/mie-ganbatte-gresik-by-ganbatte-kitchen-825139ba-100a-4201-8b2a-b7d944862824",color:"#00AA13",icon:"gojek"},{id:"shopee",name:"ShopeeFood",url:"https://shopee.co.id/now-food/shop/22657133?shareChannel=copy_link&stm_medium=referral&stm_source=https%3A%2F%2Ftaplink.cc%2F-rw&uls_trackid=56o9o27m00kk",color:"#EE4D2D",icon:"shopee"}]},{id:"jember",name:"Mie Ganbatte Jember",city:"JEMBER",cityDisplay:"Jember",address:"Jl. Letjend Suprapto No.106, Lingkungan Sumberdand, Kebonsari, Jember",googleMaps:"https://www.google.com/maps?q=-8.1834889,113.70304&z=18",whatsapp:"https://wa.me/6285191291883?text=Halo%20Mie%20Ganbatte%20Jember,%20saya%20mau%20order",whatsappRaw:"whatsapp://send?phone=6285191291883&text=",menuDrive:"https://drive.google.com/file/d/1ND_rmcmUEjFkfqbT_SjKLTnT2omGEuk0/view",platforms:[{id:"gojek",name:"GoFood",url:"https://gofood.co.id/jember/restaurant/mie-ganbatte-by-ganbatte-kitchen-jember-716d2190-c84b-4602-9668-4124a71a7556",color:"#00AA13",icon:"gojek"},{id:"grab",name:"GrabFood",url:"https://food.grab.com/id/id/restaurant/mie-ganbatte-by-ganbatte-kitchen-jember-delivery/6-C4KBR3TYT4BCGJ",color:"#00B14F",icon:"grab"},{id:"shopee",name:"ShopeeFood",url:"https://shopee.co.id/universal-link/now-food/shop/22964443?deep_and_deferred=1&shareChannel=copy_link",color:"#EE4D2D",icon:"shopee"}]},{id:"yogyakarta",name:"Mie Ganbatte Yogyakarta",city:"YOGYAKARTA",cityDisplay:"Yogyakarta",address:"Jl. Cenderawasih No.32B, Mrican, Demangan, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta",googleMaps:"https://www.google.com/maps?q=-7.7795496,110.3887004&z=18",whatsapp:"https://wa.me/6282142425603?text=Halo%20Mie%20Ganbatte%20Yogyakarta,%20saya%20mau%20order",whatsappRaw:"whatsapp://send?phone=6282142425603&text=",menuDrive:"https://drive.google.com/file/d/1ND_rmcmUEjFkfqbT_SjKLTnT2omGEuk0/view",platforms:[{id:"gojek",name:"GoFood",url:"https://gofood.co.id/yogyakarta/restaurant/mie-ganbatte-by-ganbatte-kitchen-yogyakarta-faefa4fa-652b-47a1-8e7b-94b30db69d16",color:"#00AA13",icon:"gojek"},{id:"grab",name:"GrabFood",url:"https://food.grab.com/id/id/restaurant/mie-ganbatte-by-ganbatte-kitchen-jogjakarta-delivery/6-C6T1GVEKJXAWR2",color:"#00B14F",icon:"grab"},{id:"shopee",name:"ShopeeFood",url:"https://shopee.co.id/now-food/shop/22964444?shareChannel=copy_link&stm_medium=referral&stm_source=https%3A%2F%2Ftaplink.cc%2F-rw&uls_trackid=56o9pu3o00li",color:"#EE4D2D",icon:"shopee"}]},{id:"surabaya",name:"Mie Ganbatte Tandes",city:"SURABAYA",cityDisplay:"Surabaya (Tandes)",address:"Jl. Raya Darmo Indah Bar. No.19, Tandes Kidul, Kec. Tandes, Surabaya",googleMaps:"https://www.google.com/maps?q=-7.2639469,112.6834214&z=18",whatsapp:"https://wa.me/6285185426893?text=Halo%20Mie%20Ganbatte%20Tandes,%20saya%20mau%20order",whatsappRaw:"whatsapp://send?phone=6285185426893&text=",menuDrive:"https://drive.google.com/file/d/18EeQqNiphmGbYkcTQGGygwAUjp99iQBp/view",platforms:[{id:"gojek",name:"GoFood",url:"https://gofood.co.id/surabaya/restaurant/mie-ganbatte-tandes-by-ganbatte-kitchen-50bc154e-cf01-4f68-9c4a-dbde1888d8c4",color:"#00AA13",icon:"gojek"},{id:"shopee",name:"ShopeeFood",url:"https://shopee.co.id/now-food/shop/23184886?shareChannel=copy_link&stm_medium=referral&stm_source=https%3A%2F%2Ftaplink.cc%2F-rw&uls_trackid=56o9qcgs00td",color:"#EE4D2D",icon:"shopee"}]},{id:"tangerang",name:"Mie Ganbatte Tangerang",city:"TANGERANG",cityDisplay:"Tangerang (Citra Raya)",address:"Jalan Kolintang Ruko K1 No. 21R, Citra Raya, Cikupa, Kecamatan Cikupa, Kabupaten Tangerang, Banten",googleMaps:"https://www.google.com/maps?q=-6.2397703,106.5243381&z=18",whatsapp:"https://wa.me/6282337514857?text=Halo%20Mie%20Ganbatte%20Tangerang,%20saya%20mau%20order",whatsappRaw:"whatsapp://send?phone=6282337514857&text=",menuDrive:"https://drive.google.com/file/d/1jnnAjw7Wu4diz1Y9DyO6db3fc5f9t3m0/view",platforms:[]}],A=[{id:"ALL",name:"Semua Kota"},{id:"MALANG",name:"Malang"},{id:"GRESIK",name:"Gresik"},{id:"JEMBER",name:"Jember"},{id:"YOGYAKARTA",name:"Yogyakarta"},{id:"SURABAYA",name:"Surabaya"},{id:"TANGERANG",name:"Tangerang"}];document.addEventListener("DOMContentLoaded",()=>{E(),w(),I(),B(),M(),j(),N(),C(),D(),O(),T()});function E(){const t=document.getElementById("heroPlateImg"),a=document.querySelectorAll(".switcher-btn");if(!t||!a.length)return;const s={supreme:{src:"assets/dish-ramen-supreme.jpg",alt:"Ramen Chili Oil Supreme Mie Ganbatte"},goreng:{src:"assets/dish-mie-goreng.jpg",alt:"Mie Ganbatte Goreng Chili Oil"}};a.forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.dish;s[i]&&(a.forEach(n=>n.classList.remove("active")),e.classList.add("active"),t.style.opacity="0",t.style.transform="scale(0.95)",setTimeout(()=>{t.src=s[i].src,t.alt=s[i].alt,t.style.opacity="1",t.style.transform="scale(1)"},200))})})}function w(){document.querySelectorAll(".featured-card").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.category;if(!s)return;const e=document.getElementById("menu");e&&e.scrollIntoView({behavior:"smooth"});const i=document.querySelector(`.menu-tab-btn[data-category="${s}"]`);i&&i.click()})})}let v="ALL";function I(){const t=document.getElementById("menuTabs"),a=document.getElementById("menuGrid");if(!t||!a)return;t.innerHTML=k.map(e=>`
    <button class="menu-tab-btn ${e.id==="ALL"?"active":""}" data-category="${e.id}">
      ${e.name}
    </button>
  `).join("");const s=t.querySelectorAll(".menu-tab-btn");s.forEach(e=>{e.addEventListener("click",()=>{s.forEach(i=>i.classList.remove("active")),e.classList.add("active"),v=e.dataset.category,f(v)})}),f("ALL")}function f(t){const a=document.getElementById("menuGrid");if(!a)return;const s=t==="ALL"?l:l.filter(e=>e.category===t);a.innerHTML=s.map(e=>{let i="";e.badge==="BEST SELLER"?i='<span class="badge-pill badge-bestseller">⭐ BEST SELLER</span>':e.badge==="PEDAS"?i='<span class="badge-pill badge-spicy">🌶️ PEDAS</span>':e.badge==="TIDAK PEDAS"&&(i='<span class="badge-pill badge-nonspicy">TIDAK PEDAS</span>');const n=e.spicyLevels&&e.spicyLevels.length>0?`🌶️ Lv ${e.spicyLevels.join(" / ")}`:e.options?e.options.join(" / "):e.spicyNote,r=e.isSauce?`
        <div class="sauce-card-visual">
          <div>${e.id==="saus-keju"?"🧀":"🍣"}</div>
          <span class="sauce-label">${e.name}</span>
        </div>
      `:`<img src="${e.image}" alt="${e.name}" loading="lazy" />`;return`
      <article class="food-card" data-item-id="${e.id}">
        <div class="food-card-img-wrap">
          ${r}
          <div class="food-card-badges">
            ${i}
            ${e.series?`<span class="badge-pill badge-turquoise">${e.series}</span>`:""}
          </div>
        </div>
        <div class="food-card-content">
          <div>
            <span class="food-card-category">${e.category}</span>
            <h3 class="food-card-title">${e.name}</h3>
            <p class="food-card-desc">${e.description}</p>
          </div>
          <div class="food-card-footer">
            <div class="food-card-price">
              <span class="price-label">${n}</span>
              <span class="price-value">${e.priceRange}</span>
            </div>
            <button class="btn-detail" data-open-detail="${e.id}">
              Lihat Detail
            </button>
          </div>
        </div>
      </article>
    `}).join(""),a.querySelectorAll("[data-open-detail]").forEach(e=>{e.addEventListener("click",i=>{i.stopPropagation(),u(e.dataset.openDetail)})}),a.querySelectorAll(".food-card").forEach(e=>{e.addEventListener("click",()=>{u(e.dataset.itemId)})})}function M(){const t=document.getElementById("bestsellerGrid");t&&(t.innerHTML=S.map(a=>`
    <article class="bestseller-card" data-item-id="${a.id}">
      <span class="bestseller-ribbon">⭐ BEST SELLER</span>
      <div class="bestseller-img-wrap">
        <img src="${a.image}" alt="${a.name}" loading="lazy" />
      </div>
      <div class="bestseller-body">
        <span class="food-card-category">${a.category}</span>
        <h3>${a.name}</h3>
        <p>${a.description}</p>
        <div class="bestseller-footer">
          <div class="food-card-price">
            <span class="price-label">🌶️ Lv ${a.spicyLevels.join(" / ")}</span>
            <span class="price-value">${a.priceRange}</span>
          </div>
          <button class="btn btn-primary btn-sm" data-open-detail="${a.id}">
            Lihat Detail
          </button>
        </div>
      </div>
    </article>
  `).join(""),t.querySelectorAll("[data-open-detail]").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation(),u(a.dataset.openDetail)})}),t.querySelectorAll(".bestseller-card").forEach(a=>{a.addEventListener("click",()=>{u(a.dataset.itemId)})}))}function B(){const t=document.getElementById("spicyGrid");t&&(t.innerHTML=R.map(a=>{const s="🌶️".repeat(a.peppers);return`
      <div class="spicy-card ${a.isExtreme?"level-extreme":""}" data-level="${a.level}">
        <div class="spicy-level-num">LV ${a.level}</div>
        <div class="spicy-peppers">${s}</div>
        <div class="spicy-label">${a.label}</div>
        <p class="spicy-desc">${a.description}</p>
        <span class="spicy-applicable">${a.suitableFor}</span>
      </div>
    `}).join(""))}let p="ALL",o="";function j(){const t=document.getElementById("outletFilterBar"),a=document.getElementById("outletSearchInput"),s=document.getElementById("outletsGrid");!t||!s||(t.innerHTML=A.map(e=>`
    <button class="outlet-filter-btn ${e.id==="ALL"?"active":""}" data-city="${e.id}">
      ${e.name}
    </button>
  `).join(""),t.querySelectorAll(".outlet-filter-btn").forEach(e=>{e.addEventListener("click",()=>{t.querySelectorAll(".outlet-filter-btn").forEach(i=>i.classList.remove("active")),e.classList.add("active"),p=e.dataset.city,g()})}),a&&a.addEventListener("input",e=>{o=e.target.value.toLowerCase().trim(),g()}),g())}function g(){const t=document.getElementById("outletsGrid");if(!t)return;const a=y.filter(s=>{const e=p==="ALL"||s.city===p,i=!o||s.name.toLowerCase().includes(o)||s.address.toLowerCase().includes(o)||s.cityDisplay.toLowerCase().includes(o);return e&&i});if(a.length===0){t.innerHTML=`
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: white; border-radius: 16px;">
        <p style="font-weight: 700; font-size: 1.1rem; color: #555;">Tidak ada outlet yang cocok dengan pencarian.</p>
        <button class="btn btn-secondary btn-sm" id="resetOutletFilter" style="margin-top: 14px;">Reset Pencarian</button>
      </div>
    `;const s=document.getElementById("resetOutletFilter");s&&s.addEventListener("click",()=>{p="ALL",o="";const e=document.getElementById("outletSearchInput");e&&(e.value=""),document.querySelectorAll(".outlet-filter-btn").forEach(i=>{i.classList.toggle("active",i.dataset.city==="ALL")}),g()});return}t.innerHTML=a.map(s=>{const e=s.platforms.map(i=>`
      <a href="${i.url}" target="_blank" rel="noopener noreferrer" class="btn-platform ${i.icon==="gojek"?"gofood":i.icon+"food"}">
        ${i.name}
      </a>
    `).join("");return`
      <article class="outlet-card">
        <div>
          <div class="outlet-header">
            <span class="outlet-city-tag">${s.cityDisplay}</span>
            <h3 class="outlet-title">${s.name}</h3>
          </div>
          <div class="outlet-address">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${s.address}</span>
          </div>
          <div class="outlet-action-links">
            <a href="${s.googleMaps}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
              Google Maps
            </a>
            <a href="${s.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              WhatsApp
            </a>
            <a href="${s.menuDrive}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              Menu Resmi
            </a>
          </div>
        </div>

        <div class="outlet-platform-section">
          <div class="platform-heading">Order Online Delivery</div>
          <div class="platform-buttons-group">
            ${s.platforms.length>0?e:'<span class="no-delivery-notice">Pemesanan online dapat dilakukan via WhatsApp / Dine-in</span>'}
          </div>
        </div>
      </article>
    `}).join("")}function N(){const t=document.getElementById("orderOutletSelect"),a=document.getElementById("orderDynamicPlatforms"),s=document.getElementById("orderOutletAddressDisplay");if(!t||!a)return;t.innerHTML=y.map(i=>`
    <option value="${i.id}">${i.name} (${i.cityDisplay})</option>
  `).join("");function e(){const i=t.value,n=y.find(r=>r.id===i);n&&(s&&(s.innerHTML=`
        <strong>Alamat:</strong> ${n.address}
      `),n.platforms.length>0?a.innerHTML=n.platforms.map(r=>`
        <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: ${r.color}; border: none;">
          Pesan via ${r.name}
        </a>
      `).join("")+`
        <a href="${n.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          WhatsApp Outlet
        </a>
      `:a.innerHTML=`
        <div style="width: 100%; text-align: center;">
          <p style="font-size: 0.95rem; color: #555; margin-bottom: 14px;">
            Layanan pesan antar aplikasi untuk outlet Tangerang saat ini dapat dipesan langsung via WhatsApp resmi:
          </p>
          <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
            <a href="${n.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: #25D366; border: none;">
              Chat WhatsApp Outlet
            </a>
            <a href="${n.googleMaps}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              Buka Google Maps
            </a>
          </div>
        </div>
      `)}t.addEventListener("change",e),e()}function C(){const t=document.getElementById("foodModalBackdrop"),a=document.getElementById("modalCloseBtn");if(!t)return;a&&a.addEventListener("click",c),t.addEventListener("click",e=>{e.target===t&&c()}),window.addEventListener("keydown",e=>{e.key==="Escape"&&t.classList.contains("open")&&c()});const s=document.getElementById("modalOrderNowBtn");s&&s.addEventListener("click",()=>{c();const e=document.getElementById("order");e&&e.scrollIntoView({behavior:"smooth"})})}function u(t){const a=l.find(d=>d.id===t);if(!a)return;const s=document.getElementById("foodModalBackdrop"),e=document.getElementById("modalImage"),i=document.getElementById("modalCategory"),n=document.getElementById("modalTitle"),r=document.getElementById("modalDesc"),m=document.getElementById("modalPricingRows"),b=document.getElementById("modalAddonsList"),h=document.getElementById("modalAddonsSection");s&&(e&&(e.src=a.image,e.alt=a.name),i&&(i.textContent=`${a.category} ${a.series?"• "+a.series:""}`),n&&(n.textContent=a.name),r&&(r.textContent=a.description),m&&(a.priceLevels?m.innerHTML=Object.entries(a.priceLevels).map(([d,L])=>`
        <div class="modal-pricing-row">
          <span>${d}</span>
          <span class="price-tag">${L}</span>
        </div>
      `).join(""):m.innerHTML=`
        <div class="modal-pricing-row">
          <span>Harga</span>
          <span class="price-tag">${a.priceRange}</span>
        </div>
      `),h&&b&&(a.suggestedAddons&&a.suggestedAddons.length>0?(h.style.display="block",b.innerHTML=a.suggestedAddons.map(d=>`
        <span class="addon-pill">+ ${d}</span>
      `).join("")):h.style.display="none"),s.classList.add("open"),document.body.style.overflow="hidden")}function c(){const t=document.getElementById("foodModalBackdrop");t&&(t.classList.remove("open"),document.body.style.overflow="")}function D(){const t=document.querySelector(".site-header");t&&window.addEventListener("scroll",()=>{window.scrollY>40?t.classList.add("scrolled"):t.classList.remove("scrolled")},{passive:!0})}function O(){const t=document.getElementById("hamburgerBtn"),a=document.getElementById("mobileDrawer"),s=document.getElementById("mobileBackdrop"),e=document.getElementById("drawerCloseBtn"),i=document.querySelectorAll(".drawer-link");if(!t||!a||!s)return;function n(r){t.classList.toggle("active",r),a.classList.toggle("open",r),s.classList.toggle("open",r),document.body.style.overflow=r?"hidden":""}t.addEventListener("click",()=>{const r=a.classList.contains("open");n(!r)}),e&&e.addEventListener("click",()=>n(!1)),s.addEventListener("click",()=>n(!1)),i.forEach(r=>{r.addEventListener("click",()=>n(!1))})}function T(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(a){const s=this.getAttribute("href");if(s==="#"||!s)return;const e=document.querySelector(s);e&&(a.preventDefault(),e.scrollIntoView({behavior:"smooth",block:"start"}))})})}
