//  title: familyStory.js
// author: David Kent (dk.davidkent@gmail.com)

const families = [
    
    { // Family 0
    records : ['photos','censuses'],
    dad : { name: "Herbert West", dates: "1877-1958", vektr:6},
    mum : { name: "Jessie Smith", dates: "1882-1973", vektr:7},
    kids : [{ name: "Doris Audrey", dates: "1906-1988", vektr:99},
    { name: "Leonard Aubrey", dates: "1908-1991", vektr:99},
    { name: "Joyce Evelyn", dates: "1911-19??", vektr:99},
    { name: "Cyril Reginald", dates: "1913-2002", vektr:99},
    { name: "Phyllis Mary", dates: "1916-1991", vektr:99},
    { name: "Joan Olive", dates: "1916-1981", vektr:1}//NEXT kid - kd
    ], // Add census info - csus
    photos: [{picture:'https://www.dropbox.com/scl/fi/2xpgqb5rf49zrkgexqek6/KENT-6X4-05.avif?rlkey=1jas1sjwpn0ckl4hf2mjng7yw&raw=1',
    ratio:1.5,
    title:'1940s West family at 73 Lyncombe Hill',
    caption:'1940s West family at 73 Lyncombe Hill, L to R: Rear - Herbert, Jessie. Front - Joyce, Joan, (unknown), Phyllis, Doris, (child) Bridget Ann Pearsall.',
    thumbnail:'./pictures/westsLync_thumb.avif',
    alt:'West family at Lyncombe Hill'}],
    familyName: 'Herbert &#38; Jessie West family', //use &amp; between dad and mum names
    familyNotes: '<p>Herbert and Jessie were married in 1906 at St Swithin\'s Church, Walcot, Bath (Jessie\' local parish church, when she lived at the \
    Portland Arms, her parent\'s pub).</p><p>By 1911, they were living in the corner shop in South View Road, East Twerton and Jessie\'s mother, Martha, \
    was shown in the Post Office directory for 1912 as the proprietor of the shop. Herbert was employed as a machine tool operator at the Stothert \
    and Pitt works, a short distance away.</p><p>Martha died in 1935 and the family left the shop and moved to 73 Lyncombe Hill. \
    At the start of the second world war, a population register was made <a href="https://blog.nationalarchives.gov.uk/1939-register-census-census/">(see \
    National Archives blog)</a></p>', // include <p></p> // Add census info - csus
    censuses:[{address:'28,South View Road, South Twerton',
    gmap:'https://maps.app.goo.gl/gFUtgMhJAL7kCKYg7',
    dox:[
    {year:'1911 Census',
    occupation: '1911 Census - Herbert West 33 Engineers Machinist, Jessie West 29 Wife, Doris West 4, Leonard West 2, Phillis West under 2 months, Martha Smith 60 Visitor', // include &#9474; after the year
    images:{wide:'https://www.dropbox.com/scl/fi/l585dx1qzsuouq6ighd1i/HerbertWest1911census.jpg?rlkey=mcigrqmjmyv9zrfm9cz80oshx&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/axwtvreohncn6mvr0v3xb/HerbertWest1911censusV.jpg?rlkey=aw3lipsai0y0bl0sf492dj8xk&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/syk77o4frtrwir7xedqm0/HerbertWest1911censusVz.jpg?rlkey=v0gpyoafs02w3d4jg5a2d9g03&raw=1'}},
        {year:'1912 PO Directory',
    occupation: '1912 Post Office Directory - 28 South View Road - Smith Mrs.M.A. grocer etc.',
    images:{wide:'https://www.dropbox.com/scl/fi/6ttw0xtq895h70v4qjdek/POdirectory1912.png?rlkey=ptc0ryxudip4s4hst3twac8qq&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/xwhn6v1x7gvgo905z1j88/POdirectory1912V.png?rlkey=mbwclvhmg3251d3q4ij21m4k5&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/f9fyirn3rwdfc3z6uikrk/POdirectory1912Vz.png?rlkey=hpirluydo9vagxtei9ulo0ihg&raw=1'}} // Add a year - cyr
    ]},
    {address:'73,Lyncombe Hill, Bath',
    gmap:'https://maps.app.goo.gl/nHzeZkUWRx8ytdEJ9',
    dox:[{year:'1939 Register',
    occupation:'1939 Register - 73 Lyncombe Hill - West Herbert W. Engineers Threading Machinist, West Jessie A.A. Unpaid D.Duties, West Phyllis M. Private Sec to Manuf. ? \
    West Joan O. Physicians Secretary, Baker Ann Incapacitated',
    images:{wide:'https://www.dropbox.com/scl/fi/af8y80jhcr3z9ba8oh0xs/1939register.jpg?rlkey=1xpi6i1owsj64w71ir2p2u9y8&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/af8y80jhcr3z9ba8oh0xs/1939register.jpg?rlkey=1xpi6i1owsj64w71ir2p2u9y8&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/ww1nrvn475bfr2f0il1o9/1939registerCropped.jpg?rlkey=3bv1kb74enheyr7zm24oosrdd&raw=1'}} // Add a year - cyr
    ]} // New address - cadd
    ],
},
    { // Family 1
    records : ['empty'],
    dad : { name: "Charles Kent", dates: "1911-1989", vektr:5},
    mum : { name: "Joan West", dates: "1916-1981", vektr:0},
    kids : [{ name: "Peter Nicholas", dates: "1947", vektr:2},
    { name: "David Jonathan", dates: "1950", vektr:3},
    { name: "Simon James", dates: "1955", vektr:4}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 2
    records : ['empty'],
    dad : { name: "Peter Kent", dates: "1947", vektr:1},
    mum : { name: "Ann", dates: "19??", vektr:99},
    kids : [{ name: "Katherine", dates: "19??", vektr:99},
    { name: "Leah", dates: "19??", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 3
    records : ['empty'],
    dad : { name: "David Kent", dates: "1950", vektr:1},
    mum : { name: "Helen Atkinson", dates: "1956", vektr:99},
    kids : [{ name: "Benjamin", dates: "1980", vektr:99},
    { name: "Nicola Claire", dates: "1983", vektr:99},
    { name: "Gavin David", dates: "1985", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 4
    records : ['empty'],
    dad : { name: "Simon Kent", dates: "1955", vektr:1},
    mum : { name: "Susan", dates: "195?", vektr:99},
    kids : [{ name: "Jessica", dates: "19??", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 5
    records : ['censuses','photos'],
    dad : { name: "Albert Kent", dates: "1873-1954", vektr:10},
    mum : { name: "Mary Frapwell", dates: "1874-19??", vektr:99},
    kids : [{ name: "Dorothy", dates: "1892-19??", vektr:99},
    { name: "Charles", dates: "1911-1989", vektr:1}//NEXT kid - kd
    ],
    familyName: 'Albert &#38; Mary Kent family', //use &amp; between dad and mum names
    censuses:[{address:'10 Ayr Street, Twerton, Bath',
    gmap:'https://maps.app.goo.gl/8GVeXvyN74WwPpuh8',
    dox:[{year:'1901 Census',
    occupation: '1901 &#9474; Albert Kent 28, General Labourer; Mary 27, Wife; Dorothy 9 months',
    images:{wide:'https://www.dropbox.com/scl/fi/rej0qqmwdycnl17w8uo8l/Census1901AKent01.avif?rlkey=9bpgcik6nvkapcxhj4z2snkg3&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/jlmkms09i3b4c4n6tv5rx/Census1901AKentV01.avif?rlkey=ml5ihoptusz27kiknvktj9466&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/yv2qixdxs98r48mn9097v/Census1901AKentVz01.avif?rlkey=0gxw2ryf00huirig54nxslk52&raw=1'}},
    {year:'1911 Census',
    occupation: '1911 &#9474; Albert Kent 38, Main Layer Gas Works; Mary 37 wife; Dorothy Kate 10', // include &#9474; after the year
    images:{wide:'https://www.dropbox.com/scl/fi/0f5trbpt2w2d9l3v0x7vo/Census1911AlbertKent.jpg?rlkey=je5fg6ju9tddtknu1kl4rpe77&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/15yiw5ijmqu374zeql17q/Census1911AlbertKentV.jpg?rlkey=19kumrlzqy8a0h8jcx7p92lxl&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/10au7ijt7lyv9xera7x4q/Census1911AlbertKentVz.jpg?rlkey=jn1wpq62yc0kvycle97don84s&raw=1'}} // Add a year - cyr
    ]} // New address - cadd
    ],
    familyNotes: '<p>Albert Kent was born in Didcot (currently in Oxfordshire, previously Berkshire). In the 1891 census he was shown \
     as single, bording in a house in Southampton, \
     aged 18, he was working as an engine cleaner. By 1901 he was living in Twerton, in the same street as his father George, and was married \
     to Mary, who came from nearby Frome, and their first child Dorothy was nine months old, occupation general labourer.</p>\
     <p>In the 1911 census, Alberts occupation was Main Layer - Gas Works, in the same year his fathers occupation was Engine Driver Gas works. \
     Subsequently, Alberts son Charles would spend his whole working life with the same gas company.</p>\
     <p>In 1942, during WWII, the family home in Englishcombe Lane, Bath sustained bomb damage and had to be demolished. Albert and Mary then lived \
     in a wooden shed in the back garden, until the house was rebuilt.</p>', // include <p></p>
     photos:[{picture:'https://www.dropbox.com/scl/fi/0pmv5lwvjcksc2n49tptj/englishcombeLnShed.jpg?rlkey=03u3i4f9sb087j2c1sinlf2xb&raw=1',
     ratio:1.33,
     title:'Albert and Mary Kent 1944',
     caption:'Albert and Mary Kent, in front of the shed at 169 Englishcombe Lane, July 1944',
     thumbnail:'./pictures/engLnShedThumb.jpg',
     alt:'Albert and Mary Kent 1944'}// add photo &ap
    ]
    },
    { // Family 6
    records : ['censuses'],
    dad : { name: "Walter West", dates: "1855-1933", vektr:99},
    mum : { name: "Emma Keats", dates: "1855-19??", vektr:99},
    kids : [{ name: "William", dates: "1873-1???", vektr:99},
    { name: "Ella", dates: "1875-1???", vektr:99},
    { name: "Herbert Walter", dates: "1877-1958", vektr:0},
    { name: "William James", dates: "1880-1???", vektr:99},
    { name: "Thomas", dates: "1883-1915", vektr:99},
    { name: "Emma Rose", dates: "1885-1???", vektr:99},
    { name: "George", dates: "1887-1???", vektr:99},
    { name: "Emily Rose", dates: "1888-1???", vektr:99},
    { name: "Reginald Edward", dates: "1895-19??", vektr:99}//NEXT kid - kd
    ],
    familyName: 'Walter &#38; Emma West family', //use &amp; between dad and mum names
    censuses:[{address:'23 Fieldings Road, Twerton, Bath',
    gmap:'https://maps.app.goo.gl/ZMQka9ttxYea981z8',
    dox:[{year:'1901 Census',
    occupation: '1901 &#9474; Walter West 46, Blacksmiths Labourer; Emma 46, Wife; James 20, Fitter Clothing Factory; Thomas 18, Labourer Iron Foundery; + girls 12,9, boy 6',
    images:{wide:'https://www.dropbox.com/scl/fi/x9czjb9v68bnbkfktd714/Census1901WWest01.jpg?rlkey=c7x6z5o9cdkrgo5t9jw9o354a&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/orc9u5mo0jbw2by9tbi53/Census1901WWestV01.jpg?rlkey=gki5jprhpt3eyrnu42rytquc5&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/two1xu25kzqglleaq66br/Census1901WWestVz01.jpg?rlkey=a6fskmad6widthify7ziqqng1&raw=1'}} // Add a year - cyr
    ]} // New address - cadd
    ],
    familyNotes: '', // include <p></p> // Add census info - csus
    },
    { // Family 7
    records : ['censuses','photos'],
        
    dad : { name: "William Smith", dates: "1851-1922", vektr:99},
    mum : { name: "Martha Hasler", dates: "1852-1935", vektr:8},
    kids : [{ name: "Jessica Alice Annie", dates: "1882-1973", vektr:0}//NEXT kid - kd
    ],
    familyName: 'William &amp; Martha Louisa Smith family', //use &amp; between dad and mum names
    censuses:[{address:'Somerset Industrial Home for Boys, Bath',
    gmap:'https://maps.app.goo.gl/c7k6ctM4kk3wvq9N7',
    dox:[{year:'1891 Census',
    occupation: '1891 &#9474; William Smith 40, Carpenter; Louisa 38, Nurse; Jessie 9, Scholar',
    images:{wide:'https://www.dropbox.com/scl/fi/l7xznsdav3l9wfle3sz48/Census1891WSmith.jpg?rlkey=zqwjj4s0khe1htdrwmlon52y1&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/gi4jfkeenn2arhg7n1ro2/Census1891WSmithV.jpg?rlkey=myoqaq4llbvja6e0qivz8emtj&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/f45dd9q0r5hua2ntb3yog/Census1891WSmithV02.jpg?rlkey=y44ni29ywxs029x5q96fyyh4y&raw=1'}} // Add a year - cyr
    ]},
    {address:'12a Portland Place, Bath',
    gmap:'https://maps.app.goo.gl/AChpVU1iQi4ewmGz9',
    dox:[{year:'1901 Census',
    occupation: '1901 &#9474; William Smith 50, Carpenter &amp; Licenced Victualler; Louisa 49, Pub own account; Jessie A. 19, Dressmaker',
    images:{wide:'https://www.dropbox.com/scl/fi/xfvj77b74ymx7bl8or11i/Census1901WSmith.jpg?rlkey=zynlgyx19t3bhxdv8l8w9lmoe&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/m6bnb30twlnxsghk4ddh0/Census1901WSmithV.jpg?rlkey=wq9s90ozkjnzba00nffvluz3y&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/c1arkxd2gfuzg9q2bf7r9/Census1901WSmithVz.jpg?rlkey=r0iwv2zgk6ji689cnnrvwvkhf&raw=1'}}
    // Add a year ^cyr
    ]} // New address - cadd
    ],
    familyNotes: '<p>William Smith served in the Royal Engineers, daughter Jessie was born in Aldershot (main garrison of the British Army) \
    in 1882.</p><p>After leaving the Army, the family moved to Bath and in the 1891 census his occupation is shown as Carpenter at the \
    <a href="https://www.childrenshomes.org.uk/BathIH/index.shtml">Somerset Industrial Home for Boys</a> where wife Martha Louisa was employed \
    as a nurse.</p><p>The next census (1901) shows that the couple were then licencees of the Portland Arms, Bath. William was still a carpenter and \
    Jessie\'s occupation was Dressmaker</p>',// include <p></p>
    photos:[{picture:'https://www.dropbox.com/scl/fi/uvaxfuhpgxstwe4lishtz/PortlandArms03.avif?rlkey=aaji71q4pwqr833yux6wwp6q7&raw=1',
    ratio:0.793,
    title:'The Portland Arms, photograph 1947, demolished 1969.',
    caption:'The Portland Arms, photograph 1947, demolished 1969. William and Martha Smith were licencees at the start of the twentieth century.',
    thumbnail:'./pictures/PortlandArmsThumb.jpg',
    alt:"Portland Arms, Bath 1947"}
    ]
    
    },
    { // Family 8
    records : ['censuses'],
    dad : { name: "Henry Hasler", dates: "1826-1???", vektr:99},
    mum : { name: "Mary Ann", dates: "1829-1???", vektr:99},
    kids : [{ name: "Martha Louisa", dates: "1852-1935", vektr:7},
    { name: "William Peter", dates: "1854-1936", vektr:11},
    { name: "Eliza", dates: "1856-1???", vektr:99},
    { name: "Thomas", dates: "1859-1???", vektr:99}//NEXT kid - kd
    ] ,
    familyName: 'Henry &amp Mary Hasler family', //use &amp; between dad and mum names
    censuses:[{address:'20 Cherry Garden, Weathersfield, Essex',
    gmap:'https://maps.app.goo.gl/eAtmb7JCLDat7UWG6',
    dox:[{year:'1861 Census',
    occupation: '1861 &#9474; Henry Hasler 35 Agricultural Labourer, Mary Ann 32, Martha 10, Peter 7, Eliza 5, Thomas 2',
    images:{wide:'https://www.dropbox.com/scl/fi/os73gb929v6o5hwtzedro/Census1861MHasler.jpg?rlkey=fobqu2ul2w3g7d225mkfpe9ep&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/wl09ui4jgatc08gpdonnz/Census1861MHaslerV.jpg?rlkey=4st1ggsh6h87kunyahnpa4i3m&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/zms34geev25cat9emz3f2/Census1861MHaslerVz.jpg?rlkey=wk2lr3oat7kv9w97vontzjnsf&raw=1'}} // Add a year - cyr
    ]} // New address - cadd
    ],
    familyNotes: '<p>In 1861, Henry Hasler was an agricultural labourer living in the village of Weathersfield, Essex, where he had been born. \
    Mary came from Braintree, about seven miles from Weathersfield.</p><p>The Cherry Garden address is not shown on current maps.</p>', // include <p></p>// Add census info - csus
    },
    { // Family 9
    records : ['censuses'],
    dad : { name: "John Kent", dates: "1820-1???", vektr:99},
    mum : { name: "Elizabeth", dates: "1818-1???", vektr:99},
    kids : [{ name: "George", dates: "1845-1???", vektr:10},
    { name: "Mary Ann", dates: "1848-1???", vektr:99},
    { name: "Reuben", dates: "1851-1???", vektr:99},
    { name: "Martha", dates: "1854-1???", vektr:99}//NEXT kid - kd
    ],
    familyName: 'John &#38; Elizabeth Kent family', //use &amp; between dad and mum names
    censuses:[{address:'Old Moor, Milton, Berkshire',
    gmap:'https://goo.gl/maps/jGsTm1gXRZo2dM8C7',
    dox:[{year:'1851 Census',
    occupation: '1851 &#9474; John Kent 33, Agricultural Lab; Elizabeth 29, Wife; George 6; MaryAnn 3; Reuben 4M',
    images:{wide:'https://www.dropbox.com/scl/fi/x64wbg7p7cppfzoh788xe/JKent1851Census01.jpg?rlkey=nlg2i8a3h8r50r3tlyhpu4ger&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/7o8kepxpypmuigct6ract/JKent1851CensusV01.jpg?rlkey=436t7rfjcmegt3z6d69qyl2zi&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/yo5x7xz6yfg5plo2o6v6p/JKent1851CensusVz01.jpg?rlkey=fr51u8ye7m34ojqtx4t7hxz8k&raw=1'}},
    {year:'1861 Census',
    occupation: '1861 &#9474; John Kent 41, Agricultural Lab; Elizabeth 39, Wife; George 16, Ag Lab; MaryAnn 13; Reuben 10; Martha 7',
    images:{wide:'https://www.dropbox.com/scl/fi/smwizf31j8aoblk5ogwer/JKent1861Census01.jpg?rlkey=s5m9ob1km3e6nwy4yq38t2r2u&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/jtd874fnnaz9gnkuyhkup/JKent1861CensusV01.jpg?rlkey=nbkwaqdhkl43pzqmnhk03sl0b&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/tojax7rw5ocw34qsgip9v/JKent1861CensusVz01.jpg?rlkey=1l4h2w9nurgryeyxw22tx5xsb&raw=1'}} // Add a year - cyr
    ]} // New address - cadd
    ],
    familyNotes: '', // include <p></p> // Add census info - csus
    },
    { // Family 10
    records : ['censuses'],
    dad : { name: "George Kent", dates: "1847-1927", vektr:9},
    mum : { name: "Mary", dates: "1849-1???", vektr:99},
    kids : [{ name: "Henry", dates: "1870-1???", vektr:99},
    { name: "Charles", dates: "1872-1???", vektr:99},
    { name: "Albert", dates: "1873-1954", vektr:5},
    { name: "Louisa", dates: "1875-1???", vektr:99},
    { name: "Herbert", dates: "1884-1???", vektr:99}//NEXT kid - kd
    ],
    familyName : "George &amp; Mary Ann Kent family",
    censuses:[{address:"Hagbourne Newtown, Didcot", 
    gmap:"https://maps.app.goo.gl/TRnEfAqipQMQWz8EA",
    dox:[{year:"1871 Census",
    occupation:"1871 &#9474; George Kent 25, Railway Labourer - Mary 23, Wife - Henry 1",
    images:{wide:"https://www.dropbox.com/scl/fi/lv4eq07ktsb976tdtzrne/GKent1871Census.jpg?rlkey=fcmak4znbfl9pvkvir79l09fs&raw=1",
    narrow:"https://www.dropbox.com/scl/fi/aig0f32b7oxac0zum72jb/GKent1871CensusV.jpg?rlkey=ldr5v7yplhn74vpauuaoq8mvd&raw=1",
    zoomed:"https://www.dropbox.com/scl/fi/gdhdx7yq8ujyv7ma2xgx2/GKent1871CensusVz.jpg?rlkey=qh0jyuz3wn5x88dzkezb9i3h2&raw=1"}},
    {year:"1881 Census",
    occupation:"1881 &#9474; George Kent 34, Railway Labr - Mary 32, Wife - Henry 11, Charles 9, Albert 8, Louisa 6",
    images:{wide:'https://www.dropbox.com/scl/fi/8l3u3r284ws4i8sjmt973/GKent1881Census.jpg?rlkey=ql562oyar9dx4vy0q9ht3axrk&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/a3139kmqtv8bgi3tpy7s7/GKent1881CensusV.jpg?rlkey=bvlyqyratfz96l97uze1m8p8p&raw=1',
    zoomed:'https://www.dropbox.com/scl/fi/hlr2xm7cqaxireew9oafu/GKent1881CensusVz.jpg?rlkey=f13r5r58xdso6gmlhx27a8eyn&raw=1'}},
    {year:"1891 Census",
    occupation:"1891 &#9474; George Kent 44, Shed Labourer - Mary 42, Wife - Charles 19, Locomotive Fireman - Herbert 7",
    images:{wide:'https://www.dropbox.com/scl/fi/dbijhrbvwtzwncfprrube/GKent1891Census.jpg?rlkey=euzj5ozwysl939906zdm1zndz&raw=1',
        narrow:'https://www.dropbox.com/scl/fi/yjm2i59664777trtwvz2p/GKent1891CensusV.jpg?rlkey=ky213za7shi5w5617ii39kxej&raw=1',
        zoomed:'https://www.dropbox.com/scl/fi/fxsolavoztv43rcmfvepf/GKent1891CensusVz.jpg?rlkey=bz9hp5yl2js5xmlqcnhufnld5&raw=1'}}]
    },
    {address:"4 Ayr Street, Twerton, Bath",
    gmap:"https://maps.app.goo.gl/w1tVUeGy2BMw65NQ9",
    dox:[{year:"1901 Census",
    occupation:"1901 &#9474; George Kent 55, Stationary Engine Driver - Mary 53, Wife - Herbert 17, Steam Engine Fitter",
    images:{wide:'https://www.dropbox.com/scl/fi/tpd07czplrlesdwcq266h/GKent1901Census.jpg?rlkey=or6xg8bixllmtel0t4w86z95p&raw=1',
        narrow:'https://www.dropbox.com/scl/fi/bh1mpsb2qk9kr7un6ot66/GKent1901CensusV.jpg?rlkey=yjglphk2es58bz0afev1kf4z9&raw=1',
        zoomed:'https://www.dropbox.com/scl/fi/vc644ie8qujq5b6rh0jfq/GKent1901CensusVz.jpg?rlkey=76h23n1idnbjsom7jn9c2uv15&raw=1'}},
    {year:"1911 Census",
    occupation:"1911 &#9474; George Kent 64, Engine Driver Gas Works - Mary 62, Wife",
    images:{wide:'https://www.dropbox.com/scl/fi/fw5ef2nf0paqoo5t77v7u/GKent1911Census.jpg?rlkey=sk6ta3adblcatnfpwu3639mam&raw=1',
        narrow:'https://www.dropbox.com/scl/fi/1x9op85k51rxldxyeewff/GKent1911CensusV.jpg?rlkey=5e6xrmv9xdphu1dmpkg1684sy&raw=1',
        zoomed:'https://www.dropbox.com/scl/fi/iatylo7z1tr2h8b9ucwat/GKent1911CensusVz.jpg?rlkey=66zyk7t42rsgbl64bpivqb9uz&raw=1'}}]}],
    familyNotes: "<p>Between 1871 and 1891, George and his family lived near Didcot, at that time\
    a major centre of the railway industry. In the 1871 and 1881 censuses George's occupation was then shown as \'Railway Labourer\'.\
    In 1891 it was \'Shed Labourer\'.\
    The Great Western Railway had reached Didcot around 30 years previously and Hagbourne Newtown was a settlement built for the \
    rapidly expanding population of the town.\
    <a href='https://www.didcot.gov.uk/brief-history#heading-1047124'> (see Didcot brief history).</a><\p>\
    <p>After moving to Bath, his occupation was \'stationary engine driver\' (in the 1901 census) and \'engine driver gas works\'\
     (in 1911).",
    },
    
    { // Family 11
    records : ['empty'],
    dad : { name: "William Hasler", dates: "1854-1936", vektr:8},
    mum : { name: "Maria Baker", dates: "1856-1934", vektr:99},
    kids : [{ name: "Douglas William", dates: "1882-1965", vektr:12},
    { name: "Beatrice Ethel", dates: "1884-19??", vektr:99}//NEXT kid - kd
    ]// Add census info - csus
    },
    { // Family 12
    records : ['empty'],
    dad : { name: "Douglas Hasler", dates: "1882-1965", vektr:11},
    mum : { name: "Violet Collins", dates: "1886-1968", vektr:99},
    kids : [{ name: "Joan Mary", dates: "1924-2022", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    }//NEXT family - fm
    ]

// ========== controls for the navigation sidebar =============
function openNav() {
    document.getElementById("mySidenav").style.left = "0";
}
function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
}
// ============ controls for zoomed-in pictures ==============
function showDetail(pic) {
    let picture = document.getElementById(pic);
    picture.style.zIndex="4";
    picture.style.opacity="1";
    showCover(0.6);
}

function hideDetail(pic) {
    hideCover();
    var picture = document.getElementById(pic);
    picture.style.opacity="0";
    setTimeout(function() {
        picture.style.zIndex="-3";
    }, 1000); 
}

// === control for semi-transparent cover ===
function showCover(umbra) {
    var screen = document.getElementsByClassName("cover");
    screen[0].style.height="100vh";
    screen[0].style.opacity= umbra;
}
function hideCover() {
    var screen = document.getElementsByClassName("cover");
    screen[0].style.height="0"
    screen[0].style.opacity="0"
}


