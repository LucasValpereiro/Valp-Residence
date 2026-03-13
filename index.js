// ═══════════════════════════════════════
// DADOS DOS APARTAMENTOS
// ═══════════════════════════════════════
const APTS = [
    {
      id:'apto-11', num:'11', name:'Apto 11',
      type:'2q', guests:5, ac:true, sqm:89, featured:true,
      airbnb_url:'https://airbnb.com/h/valps11',
      detail:'2 quartos · 4 camas · 1 banheiro',
      desc:'Apartamento amplo e confortável de 89m² no coração da Zona Sul. Dois quartos com ar-condicionado, cozinha equipada com airfryer, camas box, garagem gratuita. A 200m do metrô Campo Belo e 15 min do Aeroporto de Congonhas.',
      rating:4.88, reviewsCount:8,
      ratings:{limpeza:4.9,exatidao:5.0,checkin:5.0,comunicacao:5.0,localizacao:5.0,custo:4.8},
      highlights:['🔑 Self check-in com fechadura inteligente','🌿 Região tranquila e segura','🏠 Cozinha totalmente equipada'],
      rooms:[{name:'Quarto 1',beds:'1 cama queen'},{name:'Quarto 2',beds:'2 camas de solteiro'},{name:'Sala',beds:'1 sofá-cama'}],
      amenities:['🍳 Cozinha completa','📶 Wi-Fi fibra','💼 Espaço de trabalho','🚗 Estacionamento gratuito','🐾 Permitido animais','📺 TV 50"','🛗 Elevador','🫧 Máquina de lavar','❄️ A/C nos quartos','📷 Câmeras externas'],
      rules:{checkin:'Após 14:00',checkout:'Antes das 10:00',maxGuests:5},
      reviewCards:[
        {author:'Marcelo',stars:5,date:'set. 2025',text:'Gostamos muito da estadia. O Fabiano nos ajudou com um check-in flexível. O local estava limpo e organizado. Tivemos uma ótima comunicação. Voltarei sempre que possível!'},
        {author:'Noádia',stars:5,date:'nov. 2025',text:'Excelente apartamento e estadia. Fabiano um super anfitrião. Top!'},
        {author:'Bruno Monteiro',stars:5,date:'nov. 2025',text:'Ótima acomodação como no anúncio! Super recomendo!'},
      ],
      photos:[
          {src:'https://lh3.googleusercontent.com/d/1J2fksoRVLdmcTlwnUolyRSDgzvvg2QQb',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1ERj9neTPsuXXihR5RG-khc-HParKWjDR',label:'Sala de Jantar'},
          {src:'https://lh3.googleusercontent.com/d/1cti87HBRp__k5wt-osBL9fL_fFfW0P1F',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1Vx7IvCNoRXsSwWfRUnM-zV1f3DNHRxKy',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1j8eK0n5k2q5gxEU722Zb6wuYQCrGnQTn',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1wqaU0HVRJf35a3ubblyZPJbJ2LC-0NBq',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/1TWedcf_H_TnaZTGfqukop21EiPtl0dFN',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/19irvTEOYcVODIZEsCn-zvviHj3qCkasH',label:'Lavabo'},
          {src:'https://lh3.googleusercontent.com/d/1bS5k0ReQG3e4bqWQkgWasMQ5fFX0SnVl',label:'Corredor'},
          {src:'https://lh3.googleusercontent.com/d/1kAjp1Iv_eNABvNotumbpGjKoFOEjhpUC',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/141G0WQ9EZ-0B_NbuZADYDfukDDjLkfuv',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/1VG11fr8QHi_EM2OCUGqJvUUfuEjJ5WJY',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/1Co6_bX3ncGC_zzhPUoKMa60lQ47dyOlH',label:'Banheiro'}
        ],
    },
    {
      id:'apto-12', num:'12', name:'Apto 12',
      type:'3q', guests:6, ac:false, sqm:89, featured:true,
      airbnb_url:'https://airbnb.com/h/projeto12',
      detail:'3 quartos · 4 camas · 1,5 banheiros',
      desc:'Melhor custo-benefício da Zona Sul! Apartamento recém renovado com 3 quartos, camas e enxovais novos, cozinha e lavanderia completas. Netflix incluso. A 5 min do metrô Campo Belo e 10 min do Aeroporto de Congonhas.',
      rating:4.85, reviewsCount:103,
      ratings:{limpeza:4.8,exatidao:4.9,checkin:4.9,comunicacao:4.9,localizacao:4.9,custo:4.8},
      highlights:['🔑 Self check-in com fechadura inteligente','🍽️ Ótimos restaurantes por perto','🏠 Cozinha totalmente equipada'],
      rooms:[{name:'Quarto 1',beds:'1 cama de casal'},{name:'Quarto 2',beds:'2 camas de solteiro'},{name:'Quarto 3',beds:'1 cama de casal'}],
      amenities:['🍳 Cozinha completa','📶 Wi-Fi fibra','🚗 Estacionamento gratuito','🐾 Permitido animais','📺 HDTV com Netflix','🛗 Elevador','🫧 Máquina de lavar','🌅 Varanda privativa'],
      rules:{checkin:'Após 14:00',checkout:'Antes das 10:00',maxGuests:6},
      reviewCards:[
        {author:'Natan',stars:5,date:'nov. 2025',text:'Ótimo ap, muito limpo, móveis em bom estado de conservação, eletrodomésticos e utensílios novos, imóvel amplo, arejado e bem localizado.'},
        {author:'Lucas',stars:5,date:'nov. 2025',text:'Excelente apartamento. Fabiano sempre respondeu com bastante agilidade e resolveu tudo que pedimos. Recomendo muito!'},
        {author:'Daniela Regina',stars:5,date:'fev. 2026',text:'A estadia foi ótima! Fabiano foi super flexível para o check-in. O apartamento é ótimo, de fácil acesso e boa localização.'},
      ],
      photos:[
          {src:'https://lh3.googleusercontent.com/d/1v5Jg9NWLXfUa7n80R8lp2CxQmOTCHeHc',label:'Corredor'},
          {src:'https://lh3.googleusercontent.com/d/1bbNR8iGRMrIniqq3tbqLxBBmy1hzRiHK',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/1MIhyaWVIoS-O7NPZxkjP5xvNkwid2k-7',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1M_rzSol0cU9W2SY-xJ5HroGRQ85nr9DA',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1sX7PdHvX8xbyr9fmCbwPwY99UTBT7oY4',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1Rg5w-SuWAdLjc6CGxpFH1Xagr3P4N3uS',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/1MjiZxXH_8i9OFl7GpiH_Llsh4ojZs1Ln',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/1vO-id-mmKUzzUN6fuLdFD0XwCUji3KNV',label:'Lavabo'},
          {src:'https://lh3.googleusercontent.com/d/1GzcN-MtFAGX9Xz_E9U_F0cozvPWyERgl',label:'Corredor'},
          {src:'https://lh3.googleusercontent.com/d/1q4s9eksVzd0c2ceoY_AU0l21ckkepoc-',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1o5ExOI9Kl8EiLEpd0yIIjDZS9DR0Z3Nb',label:'Quarto 3'},
          {src:'https://lh3.googleusercontent.com/d/15_N4ijUNiQyJH2TgP7Eolj2A2NhrIDYT',label:'Quarto 3'},
          {src:'https://lh3.googleusercontent.com/d/1GTzGAT9_K2TCLbIOKHDMjJe8sq9N16mj',label:'Banheiro'}
        ],
    },
    {
      id:'apto-21', num:'21', name:'Apto 21',
      type:'3q', guests:7, ac:true, sqm:89,
      airbnb_url:'https://airbnb.com/h/valp21',
      detail:'3 quartos · 5 camas · 2 banheiros',
      desc:'Apartamento completo de 89m² com 3 quartos e ar-condicionado em todos os cômodos. Sala espaçosa, cozinha equipada com airfryer, enxoval completo e garagem gratuita. Perfeito para famílias e grupos.',
      rating:4.75, reviewsCount:4,
      ratings:{limpeza:5.0,exatidao:4.8,checkin:5.0,comunicacao:5.0,localizacao:5.0,custo:4.8},
      highlights:['🔑 Self check-in com teclado numérico','🌿 Região tranquila e segura','💬 Ótima comunicação com o anfitrião'],
      rooms:[
        {name:'Quarto 1',beds:'1 cama casal + 1 cama solteiro',img:null},
        {name:'Quarto 2',beds:'1 cama queen',img:null},
        {name:'Quarto 3',beds:'2 camas de solteiro',img:null},
      ],
      amenities:['🍳 Cozinha completa','📶 Wi-Fi fibra','💼 Espaço de trabalho','🚗 Estacionamento gratuito','🐾 Permitido animais','📺 TV','🛗 Elevador','🫧 Máquina de lavar','❄️ A/C em todos os quartos'],
      rules:{checkin:'Após 14:00',checkout:'Antes das 10:00',maxGuests:7},
      reviewCards:[
        {author:'Guilherme',stars:5,date:'out. 2024',text:'Excelente apartamento! Muito bem localizado, limpo e confortável. O Fabiano é um anfitrião atencioso e sempre disponível. Com certeza voltarei!'},
        {author:'Caroline',stars:4,date:'nov. 2024',text:'Ótima localização, apartamento espaçoso e bem equipado. No geral foi uma ótima estadia.'},
        {author:'Nathan',stars:5,date:'dez. 2024',text:'Perfeito! Espaço lindo, limpo e muito bem localizado. Fabiano super atencioso e respondeu todas as dúvidas rapidamente.'},
      ],
      photos:[
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/7bf1f20f-92c6-4db9-9c41-1e6df4bc4467.jpeg',label:'Sala de Estar'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/89591c1e-3d50-4468-afde-575777f360d3.jpeg',label:'Sala de Estar'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/846194a5-cc43-4ea8-a453-61fc5f7dcadb.jpeg',label:'Quarto 1'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/91da5e9b-88f2-481c-9318-a48dc9235227.jpeg',label:'Cozinha'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/2d55cec4-96bd-499e-b4a2-a21fd1f0e27b.jpeg',label:'Sala de Estar'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/f1c93f3f-3c7d-49ea-8486-f86935e3c1aa.jpeg',label:'Banheiro'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/5334786a-2d57-4faf-a5b7-d55b555a92c0.jpeg',label:'Banheiro 2'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/83db96f6-5724-44e3-8ef0-bf926e87a4e1.jpeg',label:'Banheiro'},
  
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/93217aba-7cfb-4f85-ae9d-77e8db27f9fe.jpeg',label:'Quarto 1'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/1ab48adc-2c40-4776-a997-bed31628bcea.jpeg',label:'Quarto 2'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/95eb7ccd-8343-4c90-8ee0-1264b5ab3215.jpeg',label:'Quarto 3'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/6f6c2c6c-65de-4fa7-8ae0-c656ff37a827.jpeg',label:'Sala de Estar'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/b580e1ca-7231-4d2e-86d8-66ccc1921ad1.jpeg',label:'Sala de Estar'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/61c3b4ea-41fe-40b1-a218-76d643ee025e.jpeg',label:'Sala de Jantar'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/d13093f7-f78e-4cc5-aabf-46b60f1a3371.jpeg',label:'Banheiro 2'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/4927051c-304f-4971-9149-82207c2f503a.jpeg',label:'Banheiro'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/91ccc369-1d31-436c-ae65-c9287cf3bb1a.jpeg',label:'Banheiro 2'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/67ece3fd-c1ed-4eac-9158-25198f0e3fb3.jpeg',label:'Cozinha'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/2db94679-23e2-43ab-ae70-318234d2d2ee.jpeg',label:'Banheiro'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/1a7e88ee-f347-4886-97c6-76689a836963.png',label:'Sala de Estar'}
        ],
    },
    {
      id:'apto-22', num:'22', name:'Apto 22',
      type:'3q', guests:6, ac:false, sqm:90,
      airbnb_url:'https://airbnb.com/h/valp22',
      detail:'3 quartos · 5 camas · 1,5 banheiros',
      desc:'Apartamento recém renovado com 3 quartos e capacidade para 6 pessoas. Camas box novas, sala confortável, internet rápida, cozinha completa. Localização privilegiada a 3 quarteirões do metrô Campo Belo e 12 min do Aeroporto.',
      rating:4.67, reviewsCount:42,
      ratings:{limpeza:4.7,exatidao:4.7,checkin:4.9,comunicacao:4.9,localizacao:5.0,custo:4.6},
      highlights:['🔑 Self check-in com fechadura inteligente','📍 Localização imbatível','🏠 Cozinha totalmente equipada'],
      rooms:[{name:'Quarto 1',beds:'2 camas de solteiro'},{name:'Quarto 2',beds:'1 cama queen'},{name:'Quarto 3',beds:'2 camas de solteiro'}],
      amenities:['🍳 Cozinha completa','📶 Wi-Fi fibra','🚗 Estacionamento gratuito','🐾 Permitido animais','📺 TV','🛗 Elevador','🫧 Máquina de lavar'],
      rules:{checkin:'14:00 - 23:00',checkout:'Antes das 10:00',maxGuests:6},
      reviewCards:[
        {author:'Bruno Colladel',stars:5,date:'abr. 2025',text:'Me senti em casa. Fabiano foi muito solícito e atencioso desde o primeiro momento. O imóvel correspondia exatamente com todos os detalhes descritos.'},
        {author:'Natália',stars:5,date:'set. 2025',text:'Bairro e condomínio bem tranquilos, próximo ao metrô e mercado. Lugar bom de ficar, exatamente como descrito no anúncio.'},
        {author:'Eduardo Fellipe',stars:5,date:'ago. 2025',text:'Muito bem localizado, local seguro, ap confortável. Rápido nas respostas, ótimo custo-benefício.'},
      ],
      photos:[
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1015112044391465037/original/7378bf12-e191-47fe-a0b4-7cf6f342da38.jpeg',label:'Sala de Estar'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1015112044391465037/original/657bbe48-76dc-4549-9587-f12332c93977.jpeg',label:'Sala de Estar'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1015112044391465037/original/294ca237-8c73-448b-b567-70b5b1639f65.jpeg',label:'Quarto 1'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1015112044391465037/original/259ba243-a697-4a99-8846-2a24d2d7f59e.jpeg',label:'Sala de Jantar'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1015112044391465037/original/db6801b1-e86d-4cf8-9ede-4eddf499452f.jpeg',label:'Banheiro'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1015112044391465037/original/0e1bab2a-eb57-4e09-bc27-8d54b44f4954.jpeg',label:'Cozinha'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1015112044391465037/original/ee9fa7ad-c2f1-43ae-a278-5f5592e99e2a.jpeg',label:'Cozinha'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1015112044391465037/original/30f58084-7c46-41ab-9806-da32808d68f9.jpeg',label:'Lavanderia'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1015112044391465037/original/d8b33807-985e-4105-ac11-9400e46a1eb6.jpeg',label:'Sala de Estar'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1015112044391465037/original/1e4d9652-f979-48ad-b80a-b780dce8d1da.jpeg',label:'Quarto 2'},
          {src:'https://a0.muscache.com/im/pictures/hosting/Hosting-1015112044391465037/original/ee887a47-95d2-4165-ab42-a6f165933b01.jpeg',label:'Quarto 3'}
        ],
    },
    {
      id:'apto-31', num:'31', name:'Apto 31',
      type:'2q', guests:5, ac:false, sqm:89,
      airbnb_url:'https://airbnb.com/h/valp31',
      detail:'2 quartos · 3 camas · 1 banheiro',
      desc:'Apartamento recém renovado, ideal para família ou viagem de negócios até 5 pessoas. Localizado em ponto nobre da Zona Sul próximo ao aeroporto de Congonhas, metrô Campo Belo e Shopping Morumbi. Cozinha equipada e garagem gratuita.',
      rating:4.73, reviewsCount:11,
      ratings:{limpeza:4.6,exatidao:4.8,checkin:4.8,comunicacao:5.0,localizacao:4.9,custo:4.7},
      highlights:['🔑 Self check-in com fechadura inteligente','🌿 Região tranquila','🏠 Cozinha totalmente equipada'],
      rooms:[{name:'Quarto 1',beds:'1 cama queen'},{name:'Quarto 2',beds:'2 camas de solteiro'}],
      amenities:['🍳 Cozinha completa','📶 Wi-Fi fibra','💼 Espaço de trabalho','🚗 Estacionamento gratuito','🐾 Permitido animais','📺 TV','🛗 Elevador','🫧 Máquina de lavar'],
      rules:{checkin:'Após 14:00',checkout:'Antes das 10:00',maxGuests:5},
      reviewCards:[
        {author:'Lucas Gabriel',stars:5,date:'out. 2025',text:'Excelente estadia e imóvel! A comunicação com Fabiano foi perfeita e o espaço atendeu as minhas expectativas. Absolutamente recomendo.'},
        {author:'Elisabete',stars:5,date:'nov. 2025',text:'Apartamento ótimo, limpeza impecável e ótima localização. O Fabiano é muito gentil e responde super rápido.'},
        {author:'Lucas',stars:5,date:'nov. 2025',text:'Apartamento impecável, confortável, em bairro bonito, perto da estação e com restaurantes por perto. Fabiano muito gentil.'},
      ],
      photos:[
          {src:'https://lh3.googleusercontent.com/d/1RFWVFTGVkixW_JANTLJUrBdH-A4OuFfk',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1G7xM2HJv96HbaKaYx7K1rInqnXwFoPT7',label:'Sala de Jantar'},
          {src:'https://lh3.googleusercontent.com/d/1yrG_ANVmVvRBh5YErc9yPuyLmgnytFcb',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1UBWIP3MzYtht4dnyvw9ICFZfoq3-FIA8',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1wo_4WL1V3bekLhiL8gnD_lKm_89VSrLj',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1X1538FMxdvWfMXY9G7k8IEk8PTGBKKSk',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/1J0_KYgqJCAVyc2HPwGatKA699PHz9sRx',label:'Quarto 3'},
          {src:'https://lh3.googleusercontent.com/d/1HZk75CDuiGQB249YYnSFhsDpqKdqGVrl',label:'Lavabo'},
          {src:'https://lh3.googleusercontent.com/d/18AScbGlisrBmpRMPzKv7n27MYBN3epbs',label:'Corredor'},
          {src:'https://lh3.googleusercontent.com/d/1v6l6sR0ILQKVmbIwOTVKmVZk72QH1jw5',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/180ErcjKOKqs0-PRSG0QGvG59QQS9BuYz',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/1kKVA28qv9UsQUFJpcflueHab6YlAY52l',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1rCr87wLs4rpYaXaS9L_0M-ZR81MtIHF-',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1S8KHT67SNOiWLPCUeT9Oz9otY4Skj00Y',label:'Banheiro'},
        ],
    },
    {
      id:'apto-32', num:'32', name:'Apto 32',
      type:'2q', guests:5, ac:false, sqm:89,
      airbnb_url:'https://airbnb.com/h/valp32',
      detail:'2 quartos · 3 camas · 1,5 banheiros',
      desc:'Apartamento recém reformado, amplo e bem arejado. Privacidade e conforto para quem vem a negócios ou família. Bairro nobre a 10 min do aeroporto de Congonhas e 3 quarteirões do metrô Campo Belo. Garagem coberta e gratuita.',
      rating:4.59, reviewsCount:44,
      ratings:{limpeza:4.7,exatidao:4.7,checkin:4.8,comunicacao:4.7,localizacao:5.0,custo:4.6},
      highlights:['🔑 Self check-in com funcionários do prédio','📍 Localização imbatível','🏠 Cozinha totalmente equipada'],
      rooms:[{name:'Quarto 1',beds:'1 cama queen'},{name:'Quarto 2',beds:'2 camas de solteiro'}],
      amenities:['🍳 Cozinha completa','📶 Wi-Fi fibra','💼 Espaço de trabalho','🚗 Estacionamento gratuito','🐾 Permitido animais','📺 TV','🛗 Elevador','🫧 Máquina de lavar'],
      rules:{checkin:'14:00 - 23:00',checkout:'Antes das 10:00',maxGuests:5},
      reviewCards:[
        {author:'Fernanda Silva',stars:5,date:'mar. 2025',text:'Ótima estádia. Boa localização, receptividade e espaço.'},
        {author:'Bruno Henrique',stars:5,date:'jul. 2025',text:'Local conforme anúncio, resposta rápida e tudo muito tranquilo.'},
        {author:'Andrea',stars:5,date:'mar. 2026',text:'Muito bom o custo-benefício.'},
      ],
      photos:[
          {src:'https://lh3.googleusercontent.com/d/1dJT3Ewy6k5uzcBHQt6_1lYfz0iCZtMng',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1uVHUi2q51FJoKTLiJh7QstFGoD2s6UPV',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/13UMi6qP3o8des-Ew2sRUZnV_hYPa4_zJ',label:'Sala de Jantar'},
          {src:'https://lh3.googleusercontent.com/d/1Ca3fult9n2M7dHYj3L1r7ry2kFS3OLnC',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1jSMa8Tc5jOfDXwFDUxLE1IzQH4UnSMuN',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/18suEu0iZsIkptR-Q7fBPRpaUmSSZ1ik5',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/1nRpVc57-z2YudIBZY0w66nXfUjk9HnYk',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/10sDdwN-rhM9Z9PfY4rmidiIEO_94e-8W',label:'Lavabo'},
          {src:'https://lh3.googleusercontent.com/d/1kui3YxxGxTkC1wyLgQqvlOy5lH6AZjw2',label:'Corredor'},
          {src:'https://lh3.googleusercontent.com/d/1k0IWnI-U7pQi0_WDjknQbHXHA4_xjnmh',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1qPqiJ-mqPy1YIOqyEgBS_fDVE75blFaz',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/1wBqDEi4sslIYPofr3bJRLmPBxslV-MlE',label:'Banheiro'}
        ],
    },
    {
      id:'apto-41', num:'41', name:'Apto 41',
      type:'2q', guests:5, ac:true, sqm:89,
      airbnb_url:'https://airbnb.com/h/valp41',
      detail:'2 quartos · 3 camas · 1 banheiro',
      desc:'Apartamento renovado em localização privilegiada da Zona Sul. 2 quartos com ar-condicionado, varanda, cozinha completa com airfryer e Wi-Fi VIVO Fibra. A menos de 15 min do Aeroporto de Congonhas e 10 min dos shoppings Morumbi e Ibirapuera.',
      rating:4.72, reviewsCount:99,
      ratings:{limpeza:4.6,exatidao:4.7,checkin:4.9,comunicacao:4.9,localizacao:4.9,custo:4.6},
      highlights:['🔑 Self check-in com fechadura inteligente','📍 Ótima localização','💼 Espaço de trabalho exclusivo'],
      rooms:[{name:'Quarto 1',beds:'2 camas de solteiro'},{name:'Quarto 2',beds:'1 cama queen'},{name:'Quarto extra',beds:'1 cama de solteiro'}],
      amenities:['🍳 Cozinha completa','📶 Wi-Fi fibra','💼 Espaço de trabalho','🚗 Estacionamento gratuito','🐾 Permitido animais','📺 TV','🛗 Elevador','🫧 Máquina de lavar','❄️ A/C nos quartos','🌅 Varanda'],
      rules:{checkin:'Após 14:00',checkout:'Antes das 10:00',maxGuests:5},
      reviewCards:[
        {author:'Moacir',stars:5,date:'nov. 2025',text:'Ótima localização, perto do metrô, mercado e farmácias. Anfitrião muito prestativo. Nada a reclamar! Excelente custo-benefício.'},
        {author:'Edson Raul',stars:5,date:'dez. 2025',text:'Lugar incrível, ótima localização, muito tranquilo, próximo à estação Campo Belo, menos de 500 metros, com estacionamento. Recomendo demais!'},
        {author:'Flavio',stars:5,date:'out. 2025',text:'Tudo bem limpo, fácil acesso e Fabiano foi muito atencioso.'},
      ],
      photos:[
          {src:'https://lh3.googleusercontent.com/d/1ZqmKNVR1dZLoDdUc03TOMZekTTYdpV9B',label:'Sala de Jantar'},
          {src:'https://lh3.googleusercontent.com/d/1Bx85FPgjFvMLL5mns_uVM7MXpcTg7TeQ',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1A-pRW0bAWI7p-NaPgZV8NwHTeTH5Qlfq',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1qYED6tQLD5aCF_Agr7BmZ9BWrZEBKlnb',label:'Varanda'},
          {src:'https://lh3.googleusercontent.com/d/1klE7ejGzOt8Q8afrHwTBn4faVjFiaSKF',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1SUJmwfvFubK-6-BZqPQ7B8WmnagQnYHd',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/18PbtpzJPA4YC7EYsSR74h-GSU6ygDOw_',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1pvBH9s9r1voNEdBvBO6SclGQvaSiib-Z',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/1OE5FH100n61nU5XlmDJU_XJeKSZN08Sp',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/11ZK7Ev24im7NZDR1kxl0blZqto3UOO-w',label:'Lavabo'},
          {src:'https://lh3.googleusercontent.com/d/1h45kiM6VKcHA_rY11MdNQnqA0Evle9hr',label:'Corredor'},
          {src:'https://lh3.googleusercontent.com/d/1nmGXonqkatApwyfCUsx98E8U70souJ-2',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1_pK8Ba_o0urQKeb2UcLbwg3KbUNA4uhF',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1sPpwD4iS0yXQJI_1c7ZLC5BKyLZ_7o4j',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/1_30zyRKQK2ZUu0dJLvMY60pVha5pmLrQ',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/1lW_rt-zYwruSOkc0_N4b25Cs-3PT_elD',label:'Banheiro'}
        ],
    },
    {
      id:'apto-42', num:'42', name:'Apto 42',
      type:'3q', guests:5, ac:false, sqm:90,
      airbnb_url:'https://airbnb.com/h/valp42',
      detail:'3 quartos · 5 camas · 1,5 banheiros',
      desc:'Apartamento amplo com 3 quartos e capacidade para 5 hóspedes. Camas box novas (incluindo solteirão), sofá-cama de 2,50m, cozinha completa e lavanderia. Check-in e checkout flexíveis conforme disponibilidade.',
      rating:4.76, reviewsCount:84,
      ratings:{limpeza:4.7,exatidao:4.8,checkin:4.9,comunicacao:4.9,localizacao:5.0,custo:4.7},
      highlights:['🔑 Self check-in com fechadura inteligente','🌿 Região tranquila','💼 Espaço de trabalho exclusivo'],
      rooms:[{name:'Quarto 1',beds:'2 camas de solteirão'},{name:'Quarto 2',beds:'1 cama queen'},{name:'Quarto 3',beds:'1 cama de solteiro'},{name:'Sala',beds:'1 sofá-cama 2,50m'}],
      amenities:['🍳 Cozinha completa','📶 Wi-Fi fibra','💼 Espaço de trabalho','🚗 Estacionamento gratuito','🐾 Permitido animais','📺 TV','🛗 Elevador','🫧 Máquina de lavar','💇 Secador de cabelo','🍷 Taças de vinho'],
      rules:{checkin:'Após 14:00',checkout:'Antes das 10:00',maxGuests:5},
      reviewCards:[
        {author:'Mariana',stars:5,date:'nov. 2025',text:'Apartamento amplo, bem conservado, espaçoso, com varandinha agradável. Check-in fácil, e o anfitrião responde com muita agilidade.'},
        {author:'Clenilda',stars:5,date:'set. 2025',text:'Apartamento exatamente como no anúncio. Limpo, organizado e em ótima localização. A equipe me auxiliou muito. Recomendo muito.'},
        {author:'Moni Praconi',stars:5,date:'nov. 2025',text:'Hospedagem confortável e funcional, com uma experiência bastante prática e eficiente. Com certeza recomendo.'},
      ],
      photos:[
          {src:'https://lh3.googleusercontent.com/d/1Bk6zJZzDFY0nVu4gTnntphzMROn6dppm',label:'Sala de Jantar'},
          {src:'https://lh3.googleusercontent.com/d/1_YcZxxLM__eL4_z3iYipSu2traPJRyPp',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1ycFuWbS_eK56XNCRQzlNbLhKxx2F4QVk',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1xoWPCLB1ndMZXN3jOLIIGas1DgxaxERI',label:'Sala de Jantar'},
          {src:'https://lh3.googleusercontent.com/d/1d0vuF_x0e5PmUpaYQolyhdzY41K_W_t7',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/11ICAtkVs5sTbEdY9a_hlPZQQjO-ARxRF',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/13E4PTwr7mkOYalBwDs2rbOshZ7RGaiB0',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/16YcPVxKxd1i3pYh_KpgVexZ5B80WkNe8',label:'Quarto 3'},
          {src:'https://lh3.googleusercontent.com/d/1URsjPccyc7g-C444eX8LH49pSV8J2uY3',label:'Quarto 3'},
          {src:'https://lh3.googleusercontent.com/d/1G-pvq6gxz8q0PCfkGD512uI6efvD1qYY',label:'Lavabo'},
          {src:'https://lh3.googleusercontent.com/d/1RSWeZxnfwww2djzL6Tsy3GXlPOeJ8yhS',label:'Corredor'},
          {src:'https://lh3.googleusercontent.com/d/1yFeWO_BLqc1qK41ndsjiaWG-K_RnqnJk',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1SVEb2TcESwXrOs3VpiYLCARV221yBYtw',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/1jLe5IwD5PiC83o-BEsyaQIld0F9uW_Lb',label:'Banheiro'}
        ],
    },
    {
      id:'apto-51', num:'51', name:'Apto 51',
      type:'2q', guests:5, ac:true, sqm:89, featured:true,
      airbnb_url:'https://airbnb.com/h/valps51',
      detail:'2 quartos · 3 camas · 1,5 banheiros',
      desc:'Nota 5,0 ★! Apartamento de 89m² com ar-condicionado nos dois quartos, smart TV, cozinha completa com airfryer e taças de vinho. Garagem gratuita. A 12 min do Aeroporto de Congonhas e 8 min dos shoppings Morumbi e Ibirapuera.',
      rating:5.0, reviewsCount:10,
      ratings:{limpeza:5.0,exatidao:4.9,checkin:5.0,comunicacao:5.0,localizacao:4.9,custo:4.9},
      highlights:['🔑 Self check-in com fechadura inteligente','📍 Localização adorada pelos hóspedes','🏠 Cozinha totalmente equipada'],
      rooms:[{name:'Quarto 1',beds:'1 cama queen'},{name:'Quarto 2',beds:'2 camas de solteiro'}],
      amenities:['🍳 Cozinha completa','📶 Wi-Fi fibra','💼 Espaço de trabalho','🚗 Estacionamento gratuito','🐾 Permitido animais','📺 TV','🛗 Elevador','🫧 Máquina de lavar','❄️ A/C nos quartos','📷 Câmeras externas'],
      rules:{checkin:'Após 14:00',checkout:'Antes das 10:00',maxGuests:5},
      reviewCards:[
        {author:'Gabriela',stars:5,date:'dez. 2025',text:'Apartamento espaçoso, roupas de cama e toalha de qualidade. Recomendo!'},
        {author:'Noádia',stars:5,date:'nov. 2025',text:'Excelente apartamento e estadia. Fabiano um super anfitrião. Top!'},
        {author:'Alexandre',stars:5,date:'set. 2025',text:'Sempre fico nessa acomodação, super vale a pena!'},
      ],
      photos:[
          {src:'https://lh3.googleusercontent.com/d/1G8M61F44PRHsQTqAmVwKM2QTOp-DjuW-',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1rAi6JNPYkzJXm4DkffogJfpF2Tn73My6',label:'Sala de Jantar'},
          {src:'https://lh3.googleusercontent.com/d/16IBRjcSMchYsbDwh_rYYrtiAI3hu46MV',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1JAd9nzdAOLIqCsMHnGeAAn1J-EeB4WO8',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1hh75cqq-NAYMkeG6CiFAbXBW4_kcsvwu',label:'Corredor'},
          {src:'https://lh3.googleusercontent.com/d/1XFJwhy4zuBEBBa34Ho0978RiXKs56EcW',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1y0aKW4bzABj7cxlmsETuGROGyzCqrw93',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1ASa03jvFurSHLNbxxnlDOWA1-n2ycErb',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/1rSKF_lbqu87g5RhO1uDOyiInofFlWyVy',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/1CYg5b_lytEeAVNFFnBFgSPhXW5AtGLkX',label:'Banheiro'},
          {src:'https://lh3.googleusercontent.com/d/1BXYN7vXsRyx276vPkZQ4cCGhplwrHsxL',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1mRmF3y6V-5bLnBxlWsrr9Wu_mc7Hhqcw',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1_YKPqLj_pNHm2umcKoOPKK0UFtwwlP7l',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/1LY6uDTNBKglUwLJ61BQzj-jFOMcmy9UJ',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/1Y7ftq_Kwr4cDlOZQBfCseAgl9jO8u1yR',label:'Lavabo'}
        ],
    },
    {
      id:'apto-52', num:'52', name:'Apto 52',
      type:'2q', guests:5, ac:false, sqm:89,
      airbnb_url:'https://airbnb.com/h/valp52',
      detail:'2 quartos · 3 camas · 1,5 banheiros',
      desc:'Apartamento amplo e completo na Zona Sul com móveis e camas box novas. Cozinha equipada com cafeteira, liquidificador, forno e taças de vinho. A menos de 4 min da estação de metrô Campo Belo e 12 min do Aeroporto de Congonhas.',
      rating:4.72, reviewsCount:88,
      ratings:{limpeza:4.8,exatidao:4.8,checkin:4.9,comunicacao:5.0,localizacao:4.9,custo:4.7},
      highlights:['🔑 Self check-in com fechadura inteligente','📍 Localização adorada pelos hóspedes','💼 Espaço de trabalho exclusivo'],
      rooms:[{name:'Quarto 1',beds:'1 cama queen'},{name:'Quarto 2',beds:'2 camas de solteiro'}],
      amenities:['🍳 Cozinha completa','📶 Wi-Fi fibra','💼 Espaço de trabalho','🚗 Estacionamento gratuito','🐾 Permitido animais','📺 TV','🛗 Elevador','🫧 Máquina de lavar'],
      rules:{checkin:'Após 14:00',checkout:'Antes das 10:00',maxGuests:5},
      reviewCards:[
        {author:'Mariana',stars:5,date:'jan. 2026',text:'Fabiano foi prestativo em todos os momentos. O local exatamente como nas fotos, limpo, organizado, tranquilo e bem localizado. Amamos a estadia!'},
        {author:'Cléveston',stars:5,date:'dez. 2025',text:'Foi uma excelente relação custo-benefício. Destaque para a disponibilidade e pró-atividade do anfitrião. Recomendo fortemente!!!'},
        {author:'Joao',stars:5,date:'dez. 2025',text:'O espaço é exatamente como descrito. A comunicação com o anfitrião foi rápida e eficiente. Tive uma ótima experiência.'},
      ],
      photos:[
          {src:'https://lh3.googleusercontent.com/d/1AJGkIva4Pzel5LjaBebxOIDOooAD_x86',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1LuTIpGpEIToFJSkHTM2DxH3Bx4kkUI4_',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1oV3cXJF5QiFgEFKwoCgQ9ixaXmUDQ8pQ',label:'Sala de Jantar'},
          {src:'https://lh3.googleusercontent.com/d/1A8es4kJfezju6_nfUvQ7tuRJrKQhSYqh',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1AkxTGz4YD8qi7jBZ6fD4_4Zxy17IVpQq',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1rYsUkDij9F-N814gxAMutrYQjq5KT7S9',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/1j6nr_zhUfxSTlkyuPL2TJI10NtlCQd_Z',label:'Lavabo'},
          {src:'https://lh3.googleusercontent.com/d/1Yg3JJ221zCblYfpodIJMxQy7Sn6YG3h5',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/1GOKTqKmCfsUBu7LBiUZC2BqurjeuMte1',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1Y4tE5Ngtz9vKBiDYeR2gHlcc66yJWW4l',label:'Corredor'},
          {src:'https://lh3.googleusercontent.com/d/1engBAD5q-9UhTwSJczRn5WTferXqPpc1',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1IDG-MQl8zrTOWXJKZu8E70zMHPxZi3J1',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1DTM5wqm-cNKDLCWdTpxf0dpTwuePtg0C',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/1z8D18DsvvQVTW5pF9K186uYlPNnUGjHR',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/10-M-VZ5-CUHxZSMrhWqHxN_sxnPAH-wE',label:'Banheiro'}
        ],
    },
    {
      id:'apto-61', num:'61', name:'Duplex 61',
      type:'duplex', guests:12, ac:true, sqm:190, featured:true,
      airbnb_url:'https://airbnb.com/h/duplex61',
      detail:'4 quartos · 11 camas · 3 banheiros',
      desc:'Duplex espaçoso de 190m² com 4 quartos e capacidade para 12 pessoas. Piso de madeira, enxovais novos, banheiros espaçosos, cozinha completa com Nespresso e taças de vinho. A 12 min do Aeroporto de Congonhas e 3 quarteirões do metrô.',
      rating:4.83, reviewsCount:120,
      ratings:{limpeza:4.8,exatidao:4.9,checkin:5.0,comunicacao:4.9,localizacao:4.9,custo:4.8},
      highlights:['🔑 Self check-in com fechadura inteligente','🌿 Região tranquila e segura','💼 Espaço de trabalho exclusivo'],
      rooms:[{name:'Quarto 1',beds:'1 cama queen + 1 sofá-cama'},{name:'Quarto 2',beds:'5 camas de solteiro'},{name:'Quarto 3',beds:'1 cama de casal'},{name:'Quarto 4',beds:'3 camas de solteiro'}],
      amenities:['🍳 Cozinha completa','📶 Wi-Fi fibra','💼 Espaço de trabalho','🚗 Estacionamento gratuito','🐾 Permitido animais','📺 HDTV com TV a cabo','🛗 Elevador','🫧 Máquina de lavar','❄️ A/C','☕ Nespresso','💇 Secador de cabelo','🍷 Taças de vinho','👔 Ferro de passar'],
      rules:{checkin:'Após 14:00',checkout:'Antes das 10:00',maxGuests:12},
      reviewCards:[
        {author:'Lucas',stars:5,date:'nov. 2025',text:'Apartamento absolutamente espaçoso, muito fácil de chegar do aeroporto. Fabiano foi muito atencioso e passou todas as informações que precisávamos. Tudo arrumado e limpo.'},
        {author:'Gustavo',stars:5,date:'nov. 2025',text:'Ótima estadia. O espaço atendeu bem os adultos, crianças e idosa. Toalhas, roupa de cama, tudo muito limpinho. O Fabiano foi um ótimo anfitrião.'},
        {author:'Suely',stars:5,date:'jan. 2026',text:'Apartamento muito espaçoso com tudo que precisávamos. Localização privilegiada com ônibus e metrô muito perto. Adoramos tudo.'},
      ],
      photos:[
          {src:'https://lh3.googleusercontent.com/d/1Tte1EHfEivYeBBGRCCLAS9hHw3Lby9uU',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1D9Ma8QKce_orSdWHXtzm3Ld6anAGxjCf',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1w_wBFjyycc33mch9FBV6Z5JN8B_sMoe0',label:'Sala de Jantar'},
          {src:'https://lh3.googleusercontent.com/d/1jSrd59dSP74qavNhX8FKvsaVADyFVsIC',label:'Sala de Jantar'},
          {src:'https://lh3.googleusercontent.com/d/1zp1MmAomPIt3QxaqlJ6Vq45akag2cggC',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/12lp_BUmxfOVniHJeuEeH6OMBtQJROVoy',label:'Quarto 4'},
          {src:'https://lh3.googleusercontent.com/d/1Jhdgk4zcEnA28vGADiOGg05T-nqvtqNN',label:'Quarto 4'},
          {src:'https://lh3.googleusercontent.com/d/1v6imBvDAgykIVj36efYRwhejWAJ6ZfNb',label:'Banheiro'},
          {src:'https://lh3.googleusercontent.com/d/1kgfIGpMgue_55T36PDPlsTC2cgU1dh9W',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1k0jwbI6N_ZFV7AeD-rTLM_qW01YxqFow',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1IpPQy_F9YKBlby36pviQkrOYGZszvP35',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/1xv_lQPfj0zmJruDeOPDZUT9bTSeyBpcR',label:'Banheiro 2'},
          {src:'https://lh3.googleusercontent.com/d/1AjyWeZ8-Fndqiu4ewRYIzM38jiupHjRO',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/17FBf2o-fey3EiX_m6lxcXC33nqjEP6gQ',label:'Corredor'},
          {src:'https://lh3.googleusercontent.com/d/1ao22xqlKQ1LF-tlybD2Ri1I9GZP8IDhF',label:'Corredor'},
          {src:'https://lh3.googleusercontent.com/d/1aHaQSzCyaixH_Br74v47vk6fpj8FDtC-',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/177NzaQpSX7vCFibB7Iprc5rszvQHxQmu',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1DlyXSLwZoFQg56EeqZYEiFfidqGMZnqI',label:'Banheiro 2'},
          {src:'https://lh3.googleusercontent.com/d/1PBM4nalLvt-rSFActtxUBmSX8ccdqkr9',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/15WguOac-V28QJABlkHGc6GZOPPkao5fY',label:'Quarto 3'},
          {src:'https://lh3.googleusercontent.com/d/1lKRHq5NNj1RxpKCiLPoFodGOj8gTTEkE',label:'Banheiro 3'}
        ],
    },
    {
      id:'apto-62', num:'62', name:'Duplex 62',
      type:'duplex', guests:15, ac:true, sqm:180,
      airbnb_url:'https://airbnb.com/h/apart62',
      detail:'5 quartos · 11 camas · 4,5 banheiros',
      desc:'Duplex recém renovado de 180m² com 5 quartos e 2 suítes para até 15 pessoas. Tudo novo: móveis, camas box, acessórios e enxoval completo. Localização nobre a 10 min do Aeroporto de Congonhas e dos shoppings Morumbi e Ibirapuera.',
      rating:4.81, reviewsCount:84,
      ratings:{limpeza:4.8,exatidao:4.8,checkin:4.9,comunicacao:4.9,localizacao:4.9,custo:4.8},
      highlights:['🔑 Self check-in com fechadura inteligente','🌿 Região tranquila e segura','🏠 Cozinha totalmente equipada'],
      rooms:[{name:'Quarto 1',beds:'1 cama queen (suíte)'},{name:'Quarto 2',beds:'1 cama queen (suíte)'},{name:'Quarto 3',beds:'1 cama queen'},{name:'Quarto 4',beds:'3 camas de solteiro'},{name:'Quarto 5',beds:'3 camas solteiro + beliche'}],
      amenities:['🍳 Cozinha completa','📶 Wi-Fi fibra','💼 Espaço de trabalho','🚗 Estacionamento gratuito','🐾 Permitido animais','📺 TV','🛗 Elevador','🫧 Máquina de lavar','❄️ A/C em 2 suítes','🌀 Ventilador de teto','☕ Cafeteira Nespresso','🌙 Cortinas blackout'],
      rules:{checkin:'Após 14:00',checkout:'Antes das 10:00',maxGuests:15},
      reviewCards:[
        {author:'Valeria',stars:5,date:'fev. 2026',text:'Tivemos uma ótima experiência! Tudo estava muito limpo, organizado e exatamente como descrito. A comunicação com o anfitrião foi rápida e atenciosa.'},
        {author:'Ludmilla',stars:5,date:'nov. 2025',text:'O apartamento correspondeu às nossas expectativas. Estávamos em muitas pessoas por 4 dias. O local estava bem limpo, banheiros espaçosos e em quantidade suficiente.'},
        {author:'Vera',stars:5,date:'out. 2025',text:'Nossa estadia foi excelente!!! Fabiano foi atencioso. O apartamento é muito fiel às fotos, tudo funcionando. Todos saímos muito satisfeitos!'},
      ],
      photos:[
          {src:'https://lh3.googleusercontent.com/d/1UsLYw5zUBTIMHYKWqfI1FeobMBSSgRXj',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1BVmvGlJczk5cmBOOBmhhtMEnDLKzhD2O',label:'Sala de Jantar'},
          {src:'https://lh3.googleusercontent.com/d/1JrdLwRvAPh2_48ksaufWKIuKg1jO0X-f',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1uC45_EEAyYogFpmndngQg8rkCmVrm6Ut',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1j6ZN_D45U5INBBUXJTD9WCwrD9DtlF2l',label:'Banheiro'},
          {src:'https://lh3.googleusercontent.com/d/1UV6MdLrbgYnebj4PWvtCCp4gKwQzVIfa',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1oyUvDiqwuCxDcpqhLqA8FdJZVk7RwtTE',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1f-RsMCpd5HIDocpmscWHsDtgIyUb_hgH',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/1pIVWhjIFDA7oJx-8Xbp-u4to19pnh9sB',label:'Lavabo'},
          {src:'https://lh3.googleusercontent.com/d/1k7cxYR8ndHwfwhqcOF9y4CXXJKmM4Qqw',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/1JKldc8j6Itdu4O-_iszRqAEw3GR6ohjv',label:'Corredor'},
          {src:'https://lh3.googleusercontent.com/d/1AxHAsLPJVZjXczraCbs8QAf8xXbWea-K',label:'Corredor'},
          {src:'https://lh3.googleusercontent.com/d/1rll0BOkHNq4JWorN_LcKplL2upZNxEkk',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/1I8Rcv2E4IT4WZ6WTK9M0UqnpVWqdmMV_',label:'Quarto 3'},
          {src:'https://lh3.googleusercontent.com/d/1xTvyjBCcYz1vjKAABQUbeo_XFy5aS0Nb',label:'Banheiro 2'},
          {src:'https://lh3.googleusercontent.com/d/11XfaD68uu5-UyI8UauJ4l2PBG_jAtV2C',label:'Quarto 4'},
          {src:'https://lh3.googleusercontent.com/d/19OobGHsyufoApyZZX8BaUcAnSf9KGaOP',label:'Lavanderia'},
          {src:'https://lh3.googleusercontent.com/d/1MszpFOTdpyOp0R_zVBAxSDIHXFRYXaFi',label:'Quarto 4'},
          {src:'https://lh3.googleusercontent.com/d/1asnDgkKjP8480ETtB1qnO2LjjfIAACXS',label:'Banheiro 3'},
          {src:'https://lh3.googleusercontent.com/d/1uRTSMZKY8N-SSucy5CPdhRN3BB_tU_L-',label:'Banheiro 4'},
          {src:'https://lh3.googleusercontent.com/d/1fiII1mC8Pvfjz8IEKMPGIT4YrpoE3IAi',label:'Quarto 5'},
          {src:'https://lh3.googleusercontent.com/d/1uLuxnjQsf8M5ncz-ygp_t4x5duvFpP65',label:'Quarto 5'}
        ],
    },
    {
      id:'apto-001', num:'001', name:'Apto 001',
      type:'3q', guests:7, ac:true, sqm:89,
      airbnb_url:'https://airbnb.com/h/valp001',
      detail:'3 quartos · 5 camas · 2 banheiros',
      desc:'Hospedagem prática e completa com 3 quartos e ar-condicionado para até 7 pessoas. Wi-Fi fibra, cozinha equipada com airfryer, máquina de café expresso e sanduicheira. A 2 quarteirões do metrô e 10 min do Aeroporto de Congonhas.',
      rating:4.73, reviewsCount:22,
      ratings:{limpeza:4.8,exatidao:4.7,checkin:4.9,comunicacao:4.9,localizacao:4.8,custo:4.6},
      highlights:['🔑 Self check-in com teclado numérico','🏠 Cozinha totalmente equipada','💬 Ótima comunicação com o anfitrião'],
      rooms:[{name:'Quarto 1',beds:'1 cama queen + 2 camas solteiro'},{name:'Quarto 2',beds:'1 cama de solteiro'},{name:'Quarto 3',beds:'1 cama queen'}],
      amenities:['🍳 Cozinha completa','📶 Wi-Fi fibra','💼 Espaço de trabalho','🚗 Estacionamento gratuito','🐾 Permitido animais','📺 TV','❄️ A/C em todos os quartos','☕ Cafeteira expresso','🥘 Airfryer','🥪 Sanduicheira','🍷 Taças de vinho'],
      rules:{checkin:'Após 14:00',checkout:'Antes das 10:00',maxGuests:7},
      reviewCards:[
        {author:'Teresa',stars:5,date:'out. 2025',text:'Nos encantou como tudo é bem novo, bem cuidado. As cores combinando, tudo novinho. Quando voltarmos para essa região de SP com certeza é o lugar que iremos ficar!'},
        {author:'Flavia',stars:5,date:'fev. 2026',text:'Adoramos a hospedagem. Fabiano muito atencioso desde a reserva, com instruções claras e respondia todas as perguntas. Ambiente limpo e aconchegante.'},
        {author:'Renata',stars:5,date:'nov. 2025',text:'O apto foi reservado para representantes da empresa de 4 estados. Todos elogiaram e já pediram para reservar o mesmo apto para 2026!'},
      ],
      photos:[
          {src:'https://lh3.googleusercontent.com/d/1hG0gTF0HdYGr7ENdSp2M_Rszl3_npiDG',label:'Sala de Estar'},
          {src:'https://lh3.googleusercontent.com/d/1ShiuZ06DAh0WeBhJm2LyY8YaaFbBwKLS',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/1Z8NWKbzaQrKdgYw7xprRTWogJN-nBWGX',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/1zu5UpfQ-GA5Zui8c62yPSDI1m62cvgCD',label:'Quarto 3'},
          {src:'https://lh3.googleusercontent.com/d/19L7Rzk_4pPeYrW0J1rEfxJ9scdN-0Cv3',label:'Quarto 1'},
          {src:'https://lh3.googleusercontent.com/d/165xJ7XGHHPn8L1ntBX5QSnhXKFsvz7TB',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1NBRMnc6g58W_Qv3EheJDXz7snZmsonS5',label:'Cozinha'},
          {src:'https://lh3.googleusercontent.com/d/1gUOuJWkntPuXsT7jTZySDqWSjRktEVeB',label:'Quarto 2'},
          {src:'https://lh3.googleusercontent.com/d/1S1Bo1RMJQbc4Nh7Yy5XXkqUUwYDeB5eK',label:'Quarto 3'},
          {src:'https://lh3.googleusercontent.com/d/17d_mtvUzM2mQmY9MrAxkMcK_KNh5Q76k',label:'Banheiro'},
          {src:'https://lh3.googleusercontent.com/d/1poHoQLTcwEddjdEIUojbeMGPurkr7Oek',label:'Banheiro 2'},
        ],
    },
  ];
  
  const GRADIENTS = [
    'linear-gradient(135deg,#1a1810,#2a2616)','linear-gradient(135deg,#0e1620,#162230)',
    'linear-gradient(135deg,#110e20,#1c1630)','linear-gradient(135deg,#1a1410,#281e18)',
    'linear-gradient(135deg,#0e1a14,#162818)','linear-gradient(135deg,#1a1018,#281828)',
    'linear-gradient(135deg,#0e1818,#162626)','linear-gradient(135deg,#1e1408,#2e2012)',
    'linear-gradient(135deg,#0e1020,#181830)','linear-gradient(135deg,#1a1818,#262424)',
    'linear-gradient(135deg,#100e20,#1c1a30)','linear-gradient(135deg,#0a1a10,#122816)',
    'linear-gradient(135deg,#1a1010,#281818)',
  ];
  
  // ═══════════════════════════════════════
  // RENDER APT CARDS
  // ═══════════════════════════════════════
  function renderCards() {
    const grid = document.getElementById('apt-grid');
    grid.innerHTML = '';
    APTS.forEach((a, i) => {
      const div = document.createElement('div');
      div.className = `apt-card reveal reveal-delay-${(i%4)+1}`;
      div.dataset.type = a.type;
      div.dataset.guests = a.guests;
      div.onclick = () => openApt(a.id);
      const firstPhoto = a.photos && a.photos.length > 0
        ? (a.photos.find(p => p && p.src && p.label === 'Sala de Estar') || a.photos.find(p => p && p.src))
        : null;
      const hasPhoto = !!firstPhoto;
      const cardBg = hasPhoto
        ? `background-image:url(${firstPhoto.src});background-size:cover;background-position:center;`
        : `background:${GRADIENTS[i % GRADIENTS.length]}`;
      div.innerHTML = `
        <div class="apt-img" style="${cardBg}">
          <span class="apt-num">Nº ${a.num}</span>
          <span class="apt-ac-badge ${a.ac ? 'has-ac' : 'no-ac'}">${a.ac ? '❄️ Com A/C' : '🌬️ Sem A/C'}</span>
          ${hasPhoto ? '' : '<svg width="38" height="38" fill="none" viewBox="0 0 24 24" stroke="rgba(201,168,76,0.3)" stroke-width="1"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>'}
        </div>
        <div class="apt-info">
          <div class="apt-name">${a.name}</div>
          <div class="apt-detail">${a.detail}</div>
          <div class="apt-footer">
            <div class="apt-price" style="font-size:0.78rem;color:var(--text-muted);font-family:'Jost',sans-serif;">Consulte disponibilidade e valores</div>
            <span class="apt-btn">Ver detalhes</span>
          </div>
        </div>`;
      grid.appendChild(div);
    });
    initReveal();
  }
  
  // ═══════════════════════════════════════
  // GALLERY STATE
  // ═══════════════════════════════════════
  let currentGalleryIdx = 0;
  let currentApt = null;
  const PHOTO_LABELS = [
    'Sala de Estar','Quarto Principal','Cozinha','Banheiro','Varanda','Vista Externa'
  ];
  
  function renderGallery(apt) {
    const photos = apt.photos && apt.photos.length
      ? apt.photos.map((p, i) => p || { src:null, label: PHOTO_LABELS[i % PHOTO_LABELS.length] })
      : Array.from({length:6}, (_,i) => ({ src:null, label: PHOTO_LABELS[i % PHOTO_LABELS.length] }));
    const total = photos.length;
    const salaIdx = photos.findIndex(p => p && p.label === 'Sala de Estar' && p.src);
    currentGalleryIdx = salaIdx >= 0 ? salaIdx : 0;
    updateGallerySlide(apt, currentGalleryIdx, photos);
  
    // thumbs
    const thumbsEl = document.getElementById('gallery-thumbs');
    thumbsEl.innerHTML = '';
    photos.forEach((p, t) => {
      const th = document.createElement('div');
      th.className = `g-thumb ${t === currentGalleryIdx ? 'active' : ''}`;
      if (p.src) {
        th.style.backgroundImage = `url(${p.src})`;
        th.style.backgroundSize = 'cover';
        th.style.backgroundPosition = 'center';
      } else {
        th.style.background = GRADIENTS[APTS.indexOf(apt) % GRADIENTS.length];
        th.textContent = `F${t+1}`;
      }
      th.onclick = () => { currentGalleryIdx = t; updateGallerySlide(apt, t, photos); };
      thumbsEl.appendChild(th);
    });
  
    // full gallery
    const fg = document.getElementById('full-gallery-grid');
    fg.innerHTML = '';
    photos.forEach((p, g) => {
      const item = document.createElement('div');
      item.className = 'full-gal-item';
      item.style.position = 'relative';
      if (p.src) {
        item.style.backgroundImage = `url(${p.src})`;
        item.style.backgroundSize = 'cover';
        item.style.backgroundPosition = 'center';
      } else {
        item.style.background = GRADIENTS[(APTS.indexOf(apt) + g) % GRADIENTS.length];
        item.innerHTML = `<svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="rgba(201,168,76,0.4)" stroke-width="1"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`;
      }
      const lbl = document.createElement('span');
      lbl.style.cssText = 'position:absolute;bottom:0;left:0;right:0;padding:18px 14px 10px;background:linear-gradient(transparent,rgba(0,0,0,0.55));font-size:0.65rem;color:rgba(240,237,232,0.85);letter-spacing:0.08em;';
      lbl.textContent = p.label || '';
      item.appendChild(lbl);
      item.onclick = () => {
        currentGalleryIdx = g;
        updateGallerySlide(apt, g, photos);
        openLightbox(g);
      };
      item.style.cursor = 'pointer';
      fg.appendChild(item);
    });
  }
  
  function updateGallerySlide(apt, idx, photos) {
    const main = document.getElementById('apt-gallery-main');
    const labelEl = document.getElementById('apt-gallery-label');
    const placeholderSvg = document.getElementById('apt-gallery-placeholder');
    const counter = document.getElementById('gallery-counter');
    const p = photos[idx];
    if (p && p.src) {
      main.style.opacity = '0';
      setTimeout(() => {
        main.style.backgroundImage = `url(${p.src})`;
        main.style.backgroundSize = 'cover';
        main.style.backgroundPosition = 'center';
        main.style.cursor = 'zoom-in';
        main.style.opacity = '1';
      }, 150);
      if (labelEl) labelEl.style.display = 'none';
      if (placeholderSvg) placeholderSvg.style.display = 'none';
    } else {
      main.style.backgroundImage = 'none';
      main.style.background = GRADIENTS[(APTS.indexOf(apt) + idx) % GRADIENTS.length];
      main.style.cursor = 'default';
      if (labelEl) { labelEl.style.display = 'block'; labelEl.textContent = (p && p.label) || PHOTO_LABELS[idx % PHOTO_LABELS.length]; }
      if (placeholderSvg) placeholderSvg.style.display = 'block';
    }
    counter.textContent = `${idx+1} / ${photos.length}`;
    document.querySelectorAll('.g-thumb').forEach((t,i) => t.classList.toggle('active', i===idx));
  }
  
  function galleryPrev() {
    const apt = currentApt;
    const photos = apt.photos && apt.photos.length ? apt.photos : Array.from({length:6},(_,i)=>({src:null,label:PHOTO_LABELS[i%PHOTO_LABELS.length]}));
    currentGalleryIdx = (currentGalleryIdx - 1 + photos.length) % photos.length;
    updateGallerySlide(apt, currentGalleryIdx, photos);
    stopAutoplay();
    setTimeout(startAutoplay, 8000);
  }
  function galleryNext() {
    const apt = currentApt;
    const photos = apt.photos && apt.photos.length ? apt.photos : Array.from({length:6},(_,i)=>({src:null,label:PHOTO_LABELS[i%PHOTO_LABELS.length]}));
    currentGalleryIdx = (currentGalleryIdx + 1) % photos.length;
    updateGallerySlide(apt, currentGalleryIdx, photos);
  }
  
  // ── AUTOPLAY ──
  let autoplayTimer = null;
  
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      if (currentApt) galleryNext();
    }, 4000);
  }
  
  function stopAutoplay() {
    if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; }
  }
  
  // ═══════════════════════════════════════
  // ROUTING
  // ═══════════════════════════════════════
  function openApt(id) {
    const apt = APTS.find(a => a.id === id);
    if (!apt) return;
    currentApt = apt;
  
    // fill detail page
    document.getElementById('apt-breadcrumb-name').textContent = apt.name;
    document.getElementById('apt-detail-name').textContent = apt.name;
    // price on request
    document.getElementById('apt-gallery-label').textContent = apt.name;
  
    // badges
    const badges = document.getElementById('apt-detail-badges');
    const ratingBadge = apt.rating ? `<span class="badge gold">★ ${apt.rating} · ${apt.reviewsCount} avaliações</span>` : '';
    badges.innerHTML = `
      <span class="badge">Nº ${apt.num}</span>
      <span class="badge">${apt.sqm}m²</span>
      <span class="badge">${apt.detail.split(' · ').slice(0,2).join(' · ')}</span>
      <span class="badge ${apt.ac ? 'gold' : ''}">${apt.ac ? '❄️ Com Ar-condicionado' : '🌬️ Sem Ar-condicionado'}</span>
      <span class="badge">Até ${apt.guests} hóspede${apt.guests>1?'s':''}</span>
      ${ratingBadge}`;
  
    document.getElementById('apt-detail-desc').textContent = apt.desc;
  
    // highlights
    const hlSec = document.getElementById('apt-highlights');
    const hlList = document.getElementById('apt-highlights-list');
    if (apt.highlights && apt.highlights.length) {
      hlSec.style.display = 'block';
      hlList.innerHTML = apt.highlights.map(h => `
        <div class="highlight-item">
          <span class="highlight-icon">${h.split(' ')[0]}</span>
          <span class="highlight-text">${h.split(' ').slice(1).join(' ')}</span>
        </div>`).join('');
    } else { hlSec.style.display = 'none'; }
  
    // beds
    const bedSec = document.getElementById('apt-beds');
    const bedGrid = document.getElementById('apt-beds-grid');
    if ((apt.rooms || apt.beds) && (apt.rooms || apt.beds).length) {
      bedSec.style.display = 'block';
      const _rooms = apt.rooms || apt.beds;
      // Para cada quarto, busca a foto pelo label correspondente (Quarto 1, Quarto 2, etc.)
      bedGrid.innerHTML = _rooms.map((b,i) => {
        const quartoLabel = `Quarto ${i+1}`;
        const suiteLabels = ['Suíte','Suite'];
        // Tenta achar pelo label exato, depois por Suíte (se o quarto for suíte), depois qualquer quarto
        let photo = apt.photos && (
          apt.photos.find(p => p && p.label === quartoLabel && p.src) ||
          (i === 0 && apt.photos.find(p => p && suiteLabels.includes(p.label) && p.src)) ||
          apt.photos.find(p => p && p.label && p.label.startsWith('Quarto') && p.src)
        );
        const photoIdx = photo ? apt.photos.indexOf(photo) : -1;
        const bgStyle = photo
          ? `style="background-image:url(${photo.src});background-size:cover;background-position:center;"`
          : `style="background:var(--surface2);"`;
        return `
          <div class="bed-card" onclick="${photoIdx >= 0 ? `openLightbox(${photoIdx})` : ''}" style="cursor:pointer;padding:0;overflow:hidden;">
            <div class="bed-photo" ${bgStyle}></div>
            <div style="padding:14px 16px;">
              <div class="bed-room">Quarto ${i+1}</div>
              <div class="bed-desc">${typeof b === 'object' ? (b.beds || b.name) : (b.split(' — ')[1] || b)}</div>
            </div>
          </div>`;
      }).join('');
    } else { bedSec.style.display = 'none'; }
  
    // amenities
    const ag = document.getElementById('apt-amenities-grid');
    ag.innerHTML = apt.amenities.map(a => `
      <div class="amenity">
        <span class="amenity-icon">${a.split(' ')[0]}</span>
        <span class="amenity-text">${a.split(' ').slice(1).join(' ')}</span>
      </div>`).join('');
  
    // ratings summary
    const ratSec = document.getElementById('apt-ratings-section');
    if (apt.ratings) {
      ratSec.style.display = 'block';
      document.getElementById('apt-rating-big').textContent = apt.rating;
      const totalReviews = apt.reviewsCount || apt.reviews_count || (apt.reviews ? apt.reviews.length : 0);
      document.getElementById('apt-rating-count').textContent = totalReviews + ' avaliações';
      const stars = Math.round(apt.rating);
      document.getElementById('apt-rating-stars').textContent = '★'.repeat(stars) + '☆'.repeat(5-stars);
      const rLabels = {limpeza:'Limpeza',exatidao:'Exatidão',checkin:'Check-in',comunicacao:'Comunicação',localizacao:'Localização',custo:'Custo-benefício'};
      document.getElementById('apt-ratings-grid').innerHTML = Object.entries(apt.ratings).map(([k,v]) =>
        `<div class="rating-item"><div class="rating-label">${rLabels[k]||k}</div><div class="rating-val">${v.toFixed(1)}</div></div>`).join('');
    } else { ratSec.style.display = 'none'; }
  
    // dynamic rules
    const rulesEl = document.getElementById('policy-rules');
    if (apt.rules) {
      rulesEl.innerHTML = `
        <li>Check-in: ${apt.rules.checkin}</li>
        <li>Checkout: ${apt.rules.checkout}</li>
        <li>Máximo de ${apt.rules.maxGuests} hóspedes</li>
        <li>Não é permitido festas ou eventos</li>`;
    }
  
    // reviews
    const revSec = document.getElementById('apt-reviews-section');
    const revGrid = document.getElementById('apt-reviews-grid');
    if ((apt.reviewCards || apt.reviews) && (apt.reviewCards || apt.reviews).length) {
      const _reviews = apt.reviewCards || apt.reviews;
      revSec.style.display = 'block';
      document.getElementById('apt-reviews-title').textContent = `★ ${apt.rating} · ${apt.reviewsCount || apt.reviews_count || _reviews.length} avaliações`;
      revGrid.innerHTML = _reviews.map(r => `
        <div class="review-card">
          <div class="review-header">
            <div class="review-avatar">${(r.author || r.name)[0]}</div>
            <div class="review-meta">
              <div class="review-name">${r.author || r.name}</div>
              <div class="review-info">${r.date || r.location || 'Brasil'}</div>
            </div>
          </div>
          <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
          
          <div class="review-text">${r.text}</div>
        </div>`).join('');
    } else { revSec.style.display = 'none'; }
  
    // AC sidebar feature
    const acFeat = document.getElementById('sf-ac-feat');
    if (apt.ac) {
      acFeat.style.display = 'flex';
      acFeat.querySelector('svg').style.color = 'var(--gold)';
    } else {
      acFeat.innerHTML = `<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="var(--text-muted)" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> <span style="color:var(--text-muted)">Sem Ar-condicionado</span>`;
    }
  
    // WA sidebar — updated dynamically on input change
    updateSidebarWA();
  
    // Airbnb button
    const airbnbBtn = document.getElementById('sidebar-airbnb');
    if (apt.airbnb_url) {
      airbnbBtn.href = apt.airbnb_url;
      airbnbBtn.style.display = 'flex';
    } else {
      airbnbBtn.style.display = 'none';
    }
  
    renderGallery(apt);
    startAutoplay();
  
    // switch pages
    document.getElementById('page-home').classList.remove('active');
    document.getElementById('page-apt').classList.add('active');
    window.location.hash = `apto-${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  function goHome() {
    stopAutoplay();
    document.getElementById('page-apt').classList.remove('active');
    document.getElementById('page-home').classList.add('active');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  function buildWAMessage() {
    const checkin  = document.getElementById('sf-checkin').value;
    const checkout = document.getElementById('sf-checkout').value;
    const guests   = document.getElementById('sf-guests').value;
    const apt      = currentApt;
  
    const fmtDate = d => {
      if (!d) return null;
      const [y,m,day] = d.split('-');
      return `${day}/${m}/${y}`;
    };
  
    let msg = `Olá! Tenho interesse no *${apt.name}* do Valps Residence.`;
    if (checkin)  msg += `\nCheck-in: *${fmtDate(checkin)}*`;
    if (checkout) msg += `\nCheck-out: *${fmtDate(checkout)}*`;
    if (guests)   msg += `\nHóspedes: *${guests}*`;
  
    // calc nights if both dates
    if (checkin && checkout) {
      const diff = (new Date(checkout) - new Date(checkin)) / 86400000;
      if (diff > 0 && typeof apt.price === 'number') {
        const total = diff * apt.price;
        msg += `\n\nTotal estimado: *R$ ${total.toLocaleString('pt-BR')} (${diff} noite${diff>1?'s':''} × R$ ${apt.price})*`;
      }
    }
  
    msg += `\n\nPodemos confirmar a reserva?`;
    return `https://wa.me/5585999696377?text=${encodeURIComponent(msg)}`;
  }
  
  function reserveFromDetail() {
    if (!currentApt) return;
    const url = buildWAMessage();
    window.open(url, '_blank');
  }
  
  function updateSidebarWA() {
    const el = document.getElementById('sidebar-wa');
    if (el && currentApt) el.href = buildWAMessage();
  
    // prices hidden - on request only
  }
  
  // Handle initial hash on load
  window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash.startsWith('#apto-')) {
      const id = hash.replace('#apto-', '');
      renderCards();
      openApt(id);
    } else {
      renderCards();
      goHome();
    }
  });
  
  window.addEventListener('popstate', () => {
    const hash = window.location.hash;
    if (hash.startsWith('#apto-')) {
      const id = hash.replace('#apto-', '');
      openApt(id);
    } else {
      goHome();
    }
  });
  
  
  // ═══════════════════════════════════════
  // SEARCH
  // ═══════════════════════════════════════
  function doSearch() {
    const guests = document.getElementById('s-guests').value;
    const ci     = document.getElementById('s-checkin').value;
    const co     = document.getElementById('s-checkout').value;
    const fmtDate = d => { const [y,m,day]=d.split('-'); return day+'/'+m+'/'+y; };
  
    let msg = 'Olá! Tenho interesse em reservar no Valps Residence.';
    if (ci)     msg += '\nCheck-in: *' + fmtDate(ci) + '*';
    if (co)     msg += '\nCheck-out: *' + fmtDate(co) + '*';
    if (guests) msg += '\nHóspedes: *' + guests + '*';
    msg += '\n\nPoderia me informar a disponibilidade e valores?';
  
    window.open('https://wa.me/5585999696377?text=' + encodeURIComponent(msg), '_blank');
  
    // also filter cards
    let count = 0;
    document.querySelectorAll('.apt-card').forEach(c => {
      let show = true;
      if (guests) {
        const cg = parseInt(c.dataset.guests);
        const gv = parseInt(guests);
        if (!isNaN(gv) && cg < gv) show = false;
      }
      c.classList.toggle('hidden', !show);
      if (show) count++;
    });
    const res = document.getElementById('resultados');
    res.classList.add('visible');
    document.getElementById('result-count').textContent = count;
    let ds = '';
    if (ci && co) {
      const fmt = d => new Date(d+'T00:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'short'});
      ds = ' · ' + fmt(ci) + ' → ' + fmt(co);
    }
    document.getElementById('result-dates').textContent = ds;
    scrollToSection('acomodacoes');
  }
  
  function clearSearch() {
    ['s-checkin','s-checkout','s-guests'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
    document.querySelectorAll('.apt-card').forEach(c => c.classList.remove('hidden'));
    document.getElementById('resultados').classList.remove('visible');
  }
  
  // ═══════════════════════════════════════
  // CALENDÁRIO
  // ═══════════════════════════════════════
  function filterApts(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.apt-card').forEach(card => {
      if (type === 'all') {
        card.style.display = '';
      } else {
        card.style.display = card.dataset.type === type ? '' : 'none';
      }
    });
  }
  
  function buildCalendar(id, occ) {
    const el = document.getElementById(id);
    if (!el) return;
    const now = new Date(); let y = now.getFullYear(), m = now.getMonth();
    const mn = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    function render() {
      const fd = new Date(y,m,1).getDay(), dim = new Date(y,m+1,0).getDate();
      const td = now.getDate(), isCur = y===now.getFullYear()&&m===now.getMonth();
      let h = `<div class="cal-month"><button class="cal-nav" id="${id}-prev">‹</button><span class="cal-month-name">${mn[m]} ${y}</span><button class="cal-nav" id="${id}-next">›</button></div>
      <div class="cal-days-header"><span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span></div><div class="cal-days">`;
      for(let i=0;i<fd;i++) h+=`<div class="cal-day empty"></div>`;
      for(let d=1;d<=dim;d++){const cls=occ.includes(d)?'occupied':isCur&&d===td?'today':'';h+=`<div class="cal-day ${cls}">${d}</div>`;}
      h+=`</div>`; el.innerHTML=h;
      document.getElementById(`${id}-prev`).onclick=()=>{m--;if(m<0){m=11;y--;}render();};
      document.getElementById(`${id}-next`).onclick=()=>{m++;if(m>11){m=0;y++;}render();};
    }render();
  }
  buildCalendar('cal-airbnb',[4,5,10,11,17,18,19,24,25,30]);
  
  // ═══════════════════════════════════════
  // FAQ
  // ═══════════════════════════════════════
  function toggleFaq(el) {
    const o = el.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(f=>f.classList.remove('open'));
    if(!o) el.classList.add('open');
  }
  
  // ═══════════════════════════════════════
  // SCROLL REVEAL
  // ═══════════════════════════════════════
  function initReveal() {
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
    },{threshold:0.1});
    document.querySelectorAll('.reveal:not(.visible)').forEach(el=>obs.observe(el));
  }
  initReveal();
  
  // ═══════════════════════════════════════
  // NAVBAR SCROLL
  // ═══════════════════════════════════════
  window.addEventListener('scroll',()=>{
    const nav=document.getElementById('navbar');
    nav.style.padding=window.scrollY>60?'14px 72px':'24px 72px';
  });
  
  // ═══════════════════════════════════════
  // UTILITIES
  // ═══════════════════════════════════════
  function scrollToSection(id) {
    setTimeout(()=>{
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth'});
    }, 100);
  }
  
  function handleContactSubmit(e) {
    e.preventDefault();
    const nome    = document.getElementById('c-nome').value;
    const tel     = document.getElementById('c-tel').value;
    const ci      = document.getElementById('c-checkin').value;
    const co      = document.getElementById('c-checkout').value;
    const apt     = document.getElementById('contato-apt').value;
    const guests  = document.getElementById('c-guests').value;
    const msgTxt  = document.getElementById('c-msg').value;
    const fmtDate = d => { if(!d) return null; const [y,m,day]=d.split('-'); return day+'/'+m+'/'+y; };
  
    let msg = 'Olá! Gostaria de solicitar uma reserva no *Valps Residence*.';
    if (nome)   msg += '\n\n👤 Nome: *' + nome + '*';
    if (tel)    msg += '\n📱 Telefone: *' + tel + '*';
    if (apt)    msg += '\n🏠 Acomodação: *' + apt + '*';
    if (ci)     msg += '\n📅 Check-in: *' + fmtDate(ci) + '*';
    if (co)     msg += '\n📅 Check-out: *' + fmtDate(co) + '*';
    if (guests) msg += '\n👥 Hóspedes: *' + guests + '*';
    if (msgTxt) msg += '\n\n💬 ' + msgTxt;
    msg += '\n\nAguardo confirmação de disponibilidade e valores. Obrigado!';
  
    window.open('https://wa.me/5585999696377?text=' + encodeURIComponent(msg), '_blank');
  }
  
  // ── LIGHTBOX ──
  let lbPhotos = [], lbIdx = 0;
  
  function openLightbox(idx) {
    if (!currentApt || !currentApt.photos || !currentApt.photos.length) return;
    lbPhotos = currentApt.photos;
    lbIdx = (idx !== undefined && idx >= 0 && idx < lbPhotos.length) ? idx : 0;
    showLbPhoto();
    const lb = document.getElementById('lightbox');
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function showLbPhoto() {
    const p = lbPhotos[lbIdx];
    if (!p) return;
    document.getElementById('lb-img').src = p.src;
    document.getElementById('lb-caption').textContent = p.label || '';
    document.getElementById('lb-counter').textContent = (lbIdx+1) + ' / ' + lbPhotos.length;
  }
  
  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
  
  function closeLightboxOutside(e) {
    if (e.target.id === 'lightbox') closeLightbox();
  }
  
  function lbPrev() { lbIdx = (lbIdx - 1 + lbPhotos.length) % lbPhotos.length; showLbPhoto(); }
  function lbNext() { lbIdx = (lbIdx + 1) % lbPhotos.length; showLbPhoto(); }
  
  document.addEventListener('keydown', function(e) {
    const lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lbPrev();
    if (e.key === 'ArrowRight') lbNext();
  });