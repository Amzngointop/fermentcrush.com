import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
'https://www.amazon.com/Chef-Preserve-Vacuum-Sealer-Bags/dp/B0D3ZBFMW6?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=6f48d57007b60b9fff525fd92252d764&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Electric-Mason-Vacuum-Sealer-Regular/dp/B0BDDX27WT?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=62fb3cb912ba68fde73003bf60f376b0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Updated-Bonsenkitchen-Fast-Compact-Multi-Functional-Accessory/dp/B0D91CQ69R?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=a7c0c4f9abaad213d3aedf4d1f6e500d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/MEGAWISE-One-Touch-Automatic-Portable-Sealing/dp/B08F72TY67?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=dc8c6c475b95894c97db0a01a9ce3d47&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Chef-Preserve-Containers-Reusable-Powerful/dp/B0DS1Z2VW1?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=70fceb17b56b94235a0d047871844775&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FoodSaver-VS0160-PowerVac-Compact-Vertical/dp/B08BDHZ1PV?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=dd5919c9e8329619abdddf19c581be24&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ball-Mouth-16-Ounces-Mason-Bands/dp/B07DPRLQJG?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=b03f485b2504814a7a7fbe64db783c8d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/NETANY-Overnight-Containers-Airtight-Storage/dp/B0CMQC79L4?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=b9deb850753aabe75e2d388b3ea39bdb&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ComSaf-Containers-Canning-Desserts-pudding/dp/B0DRYFXMND?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=a60a5679265206bc30413da819538b88&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Weck-Canning-Jars-743-Eco-Friendly/dp/B08D3YDKT5?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=9716d3e5aa709f7edd87bb05329a4dac&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Regular-Sealing-Canning-Overnight-Projects/dp/B08JLNHHZX?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=5909e29b8b5a01e408100a6b5977f7e0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ComSaf-Canning-Containers-Pickles-Sourdough/dp/B0F18D338Y?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=cf289e0fc1ffc2ee5587d5b709a4a571&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Rubbermaid-Brilliance-Storage-Containers-Pieces/dp/B08BR9HBZ3?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=08f92c1be0b0d09cd15332debdc37220&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/PCS-Large-Fruit-Containers-Fridge/dp/B0B27MDKXD?pf_rd_p=53d84f87-8073-4df1-9740-1bf3fa798149&pf_rd_r=2TYAXCPMWVZASSCEKM7H&sbo=9ZOMT9Jm0JH%2Ft%2BWi68iDSA%3D%3D&th=1&linkCode=ll2&tag=fermentcrush-20&linkId=c851034fb7a76240a21b66b2244b43c5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Airtight-Containers-Vtopmart-Organization-Canisters/dp/B08ZK5WDWN?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=fc3fdb0c98ea7dffb2027b5016a406db&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/OXO-Good-Grips-POP-Container/dp/B07856RRDW?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=d5a806ca2b8a905688b4043b4779aaa7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Containers-Vtopmart-Airtight-Supplies-Measuring/dp/B087G4T7VN?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=b0168875cbfb3a3b2c341e1d1da6dfe8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/STOREGANIZE-Containers-Airtight-Canisters-Container/dp/B0BM2CVQJD?&linkCode=ll2&tag=fermentcrush-20&linkId=707843e56247015766badd1777dc3cc4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Thermometer-Cooking-BACKLIGHT-WATERPROOF-Temperature/dp/B00S93EQUK?&linkCode=ll2&tag=fermentcrush-20&linkId=9a052f9626ee49691179155de57c3bc2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ThermoPro-Thermometer-Grilling-Waterproof-Ambidextrous/dp/B07XXSYLL8?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=3761aac5b8690e1f4a02957afbfa35b2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Thermometer-Precision-Essentials-Accessories-Birthday/dp/B0F5X4FM3Q?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=b9f9ede851fdd259504aad59e9118a75&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ThermoPro-Digital-Instant-Thermometer-Kitchen/dp/B01IHHLB3W?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=56d4bfe2651b62c7b8caaee6a6b63069&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Meat-Thermometer-Digital-Grilling-Cooking/dp/B0BQ782XNW?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=23779f82684f89caad000be55c6df788&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ThermoPro-Seconds-Instant-Thermometer-Digital/dp/B01LET2BFC?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=da9dff73f701600715e8e5a5f9db990e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/AmazonBasics-Stainless-Digital-Batteries-Included/dp/B06X9NQ8GX?&linkCode=ll2&tag=fermentcrush-20&linkId=538dedf869cac6f4d2f6d8a671e405fe&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Digital-Rechargeable-Stainless-Batteries-Charging/dp/B0BYN6Q8L7?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=6262afcdf81f4de5addc76d3be8a57d7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ultrean-Precision-Measures-Stainless-Batteries/dp/B08CZDYNF7?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=a277989ddadcc8a1f5205ed26d6ec189&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Nicewell-Digital-Graduation-Stainless-Tempered/dp/B07S6F6LHQ?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=5f912ac2893b1460370514e60c67759e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Escali-Digital-Multi-Functional-Kitchen-Measuring/dp/B0007GAWRS?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=eb2b46149c571f2de1af9e24470164f0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Etekcity-Multifunction-Stainless-Batteries-Included/dp/B0113UZJE2?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=a4fe6b1c379c74c58ed778057ba46cea&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Superbaking-Sourdough-Splinter-Free-Non-Stick-Jar/dp/B0FTMVFHZ3?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=6661f72b90fb1a5f1505eee6813bf28f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/San-Francisco-Sourdough-Starter-instructions/dp/B0CBW9FWYM?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=1476fe602e54de2d8e07722b3df2410a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Sourdough-Banneton-Bread-Proofing-Baskets/dp/B0FSL5QDXV?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=0f98914af5309a711af71c0149802ed3&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Superbaking-Banneton-Proofing-Splinter-Free-Sourdough/dp/B0FP3SBXW9?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=1922f962d0a626c1a157f155d169434d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Sourdough-Proofing-Banneton-Supplies-Baskets/dp/B0DPJSTLH5?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=c5bff665f1a7f5709566b7dbf7eb9573&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Dimpola-Banneton-Proofing-Sourdough-Handmade/dp/B0CXSGQKF6?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=206b6f33c81954a111196c30700c17f9&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Astercook-Deep-Carbonized-Reversible-Charcuterie-Easy-Grip/dp/B0FH6YL3XC?&linkCode=ll2&tag=fermentcrush-20&linkId=14787aae14613465292b1f11e6a1cb0d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Gorilla-Grip-Cutting-Board-Set/dp/B01GP2MTXW?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=85fe60226fed957b71e2499fd8068b89&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Titanium-Cutting-Boards-Kitchen-Dishwasher/dp/B0DQG2VHKJ?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=db08e74538c6e027608797d337a85f7c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ROYAL-CRAFT-WOOD-Cutting-Kitchen/dp/B0D2P1HSCV?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=23157a21663b3342ba69cc48bba423fa&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Epicurean-001-151101-Kitchen-Cutting-11-25-Inch/dp/B0008F6ST4?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=d5bc729b4e03051ba15b173f8290627d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Epicurean-Cutting-Non-Slip-Groove-Natural/dp/B071NV54JD?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=772b45e25074a8c5a5bdf0e98e560561&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Mueller-Mandoline-Vegetable-Spiralizer-Container/dp/B0B72DL8KL?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=79880bbc62c53ee4c21a0957a0219f1a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Fullstar-Vegetable-Chopper-Spiralizer-Accessories/dp/B0D5DM9YHB?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=034f4700dc5603b92c402d175c39bc71&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Mueller-Kitchen-Chopper-Vegetable-Cutter/dp/B0DCKCK326?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=296e3edd87577aa29f3697ae68a7c3d3&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/OXO-Adjustable-Handheld-Mandoline-Slicer/dp/B000YDO2LG?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=66aaced95a083d53e897c2e8dd79d23b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Gramercy-Kitchen-Adjustable-Stainless-Mandoline/dp/B01IW6ORDY?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=64f3baec2947791c991161a4c2b372c5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Benriner-BN120B-Mandoline-Japanese-Stainless/dp/B06XWZ16JJ?th=1&linkCode=ll2&tag=fermentcrush-20&linkId=0bf3972c4e10bd6e6d73b8f8a5671063&language=en_US&ref_=as_li_ss_tl',
]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'ferment'


   // Если зашли на / и есть кука
  if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName)

    if (redirectFlag) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)]
      //проверить url.search и удалить все параметры, оставить только utm_source
      const params = new URLSearchParams(url.search)
      const utmSource = params.get('utm_source')
      url.search = utmSource ? `?utm_source=${utmSource}` : ''


      // передавай в редирект URL и query параметры
      const response = NextResponse.redirect(randomUrl)

      // удаляем cookie
      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      })

      return response
    }
  }

  return NextResponse.next()
}


// применяем middleware только к /
export const config = {
  matcher: ['/'],
}

