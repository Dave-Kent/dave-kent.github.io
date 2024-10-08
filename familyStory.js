//  title: familyStory.js
// author: David Kent (dk.davidkent@gmail.com)

const families = [
    
    { // Family 0 ==========================================================================================================================
    records : ['photos','censuses'],
    dad : { name: "Herbert West", dates: "1877-1958", vektr:6},
    mum : { name: "Jessie Smith", dates: "1882-1973", vektr:7},
    kids : [{ name: "Doris Audrey", dates: "1906-1988", vektr:99},
    { name: "Leonard Aubrey", dates: "1908-1991", vektr:99},
    { name: "Joyce Evelyn", dates: "1911-1996", vektr:99},
    { name: "Cyril Reginald", dates: "1913-2002", vektr:99},
    { name: "Phyllis Mary", dates: "1916-1991", vektr:99},
    { name: "Joan Olive", dates: "1916-1981", vektr:1}//NEXT kid - kd
    ], // Add census info - csus
    photos: [{picture:'./pictures/jessieMarthaWill-02.avif',
    pictureV:'./pictures/jessieMarthaWill-02.avif',
    pictureZ:'./pictures/jessieMarthaWill-02.avif',
    title:'(14) 1915 - Jessie with Martha and William and four children',
    caption:'1915 - L to R rear: Martha Smith, Jessie West holding Cyril, William Smith, front: Leonard, Joyce, Doris',
    thumbnail:'./pictures/jessieMarthaWill-thumb.avif',
    alt:'Jessie West with parents and 4 children'},
    {picture:'./pictures/twinsAndNote01.avif',
    pictureV:'./pictures/twins-02.avif',
    pictureZ:'./pictures/twinsReverse.avif',
    title:'(15,16) 1923 - Twins Joan and Phyllis outside the Southview Road shop',
    caption:'1923 - Twins Joan (right) and Phyllis, aged 7, outside the Southview Road shop',
    thumbnail:'./pictures/twinsThumb.avif',
    alt:'Joan and Phyllis aged 7'},
        {picture:'./pictures/wests73-01.avif',
        pictureV:'./pictures/wests73-01.avif',
        pictureZ:'./pictures/wests73-01.avif',
    title:'1940s West family at 73 Lyncombe Hill',
    caption:'1940s West family at 73 Lyncombe Hill, L to R: Rear - Herbert, Jessie. Front - Joyce, Joan, (unknown), Phyllis, Doris, (child) Bridget Ann Pearsall.',
    thumbnail:'./pictures/westsLync_thumb.avif',
    alt:'West family at Lyncombe Hill'}],
    familyName: 'Herbert &#38; Jessie West family', //use &amp; between dad and mum names
    familyNotes: '<p>Jessie Alice Annie Smith was born in Frimley, Farnham (Aldershot) on 14 July 1881 and was baptised in Aldershot on 9th October 1881. \
    After moving to Bath with her parents and while living at the Portland Arms, Portland Place she married Herbert Walter West at \
    <a href="https://maps.app.goo.gl/qaKSemKP6xoLtDoC9">Walcot Parish Church</a> on 12th May 1906.</p> \
    <p>The 1911 census shows that they were living in the corner shop in South View Road, East Twerton and Jessie&apos;s mother, Martha, \
    was shown in the Post Office directory for 1912 as the proprietor of the shop. Herbert was employed as a machine tool operator at the Stothert \
    and Pitt works, a short distance away.</p>\
    <p>In 1915, during World War I, Jessie registered as a grocer at 28 South View Road, Twerton under the National Registration Act, 1915 (12,13).</p>\
    <p>There are photographs of Jessie with four of her children Doris, Leonard, Joyce and Cyril and her parents William and Martha Louise in a garden (14). \
    From the ages of the children the photo was taken in about 1915.</p>\
    <p>Her last two daughters, twins Phyllis and Joan, were born on 4th August 1916 in Twerton, Bath on 4th August 1916. There is a photograph of the girls \
    aged 7 standing outside the shop at 28 South View Road (15,16).</p>\
    <p>Between 8th and 12th August 1935, after her mother Martha Louisa died, Jessie sold her business stock-in-trade at 28 South View Road (17,18) and, \
    with her family, moved to <a href="https://historicengland.org.uk/listing/the-list/list-entry/1395264?section=official-list-entry">73 Lyncombe Hill</a>, Bath (19). This was a large, early 19th century, four storey townhouse which would have originally been the home of a \
    wealthy family with servants. The servants would have worked on the lower ground floor which had a scullery under a large skylight and cellars with \
    access for the delivery of coal via a manhole in the pavement. Up until the 1970s there were still the bells, with mechanical linkage, hanging below the ceiling on the lower \
    ground floor for the family to summon a servant.\
    This house gave space, not only for the large West family, but for friends and extended family members to reside.<\p>\
    <p>In preparation for the second world war, in 1939, the government made a population register in place of a census \
    <a href="https://blog.nationalarchives.gov.uk/1939-register-census-census/">(see National Archives blog)</a>\
    which shows the residents of the house at that time.</p>\
    <p>Jessie remained there until about 1970 when she went to live with various relatives until she died in \
    1973.</p>', 
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
    ]},
    {address:'none',
    gmap:'none',
    dox:[{year:'12) National Registration',
    occupation:'12) Jessie Alice Annie West - National Registration as a grocer at 28, South View Road, \
    East Twerton',
    images:{wide:'https://www.dropbox.com/scl/fi/9zuie2wkmu190l0jetlj3/jessieNatReg02.avif?rlkey=ix6w9yoyyzxfn91t2kxzmuw9n&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/pwt4953340z7t7ghny9dc/jessieNatReg02V.avif?rlkey=yfnsehtp5dv9aeddx84sgdhhv&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/sofr2ekdf72b669so7t2a/jessieNatReg.avif?rlkey=5874ewob2wldfczaqw3p2fw9a&raw=1'}},
    {year:'17,18) Stock in trade',
    occupation: '17,18) 1935 - transfer of the business in South View Road.', // include &#9474; after the year
    images:{wide:'https://www.dropbox.com/scl/fi/61gbutq3mb0wys4km3mu1/shopStock01.avif?rlkey=lepi447zwvw2i3exubb837xgr&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/hvv9es8svhv3kco20p52a/shopStockV.avif?rlkey=0abm77s3y1iizsj8qe56pwr5n&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/3m05a8pb8z5mmlabqvzhj/shopStockZ.avif?rlkey=13hfw35pd3cdjv6pqtro5p9tv&raw=1'}} // Add a year - cyr
    ]} // New address - cadd
    ],
},
    { // Family 1 ===================================================================================================================
    records : ['empty'],
    dad : { name: "Charles Kent", dates: "1911-1989", vektr:5},
    mum : { name: "Joan West", dates: "1916-1981", vektr:0},
    kids : [{ name: "Peter Nicholas", dates: "1947", vektr:2},
    { name: "David Jonathan", dates: "1950", vektr:3},
    { name: "Simon James", dates: "1955", vektr:4}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 2 =====================================================================================================================
    records : ['empty'],
    dad : { name: "Peter Kent", dates: "1947", vektr:1},
    mum : { name: "Ann Hawksworth", dates: "1948", vektr:99},
    kids : [{ name: "Katherine Rachael", dates: "1977", vektr:14},
    { name: "Leah Ann", dates: "1981", vektr:15}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 3 =====================================================================================================================
    records : ['empty'],
    dad : { name: "David Kent", dates: "1950", vektr:1},
    mum : { name: "Helen Atkinson", dates: "1956", vektr:99},
    kids : [{ name: "Benjamin", dates: "1980", vektr:99},
    { name: "Nicola Claire", dates: "1983", vektr:99},
    { name: "Gavin David", dates: "1985", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 4 =====================================================================================================================
    records : ['empty'],
    dad : { name: "Simon Kent", dates: "1955", vektr:1},
    mum : { name: "Susan", dates: "195?", vektr:99},
    kids : [{ name: "Jessie", dates: "19??", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 5 =====================================================================================================================
    records : ['censuses','photos'],
    dad : { name: "Albert Kent", dates: "1873-1954", vektr:10},
    mum : { name: "Mary Frapwell", dates: "1874-19??", vektr:99},
    kids : [{ name: "Dorothy Kate", dates: "1892-1982", vektr:99},
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
     to Mary, who came from nearby Frome, and their first child Dorothy was nine months old, his occupation was general labourer.</p>\
     <p>In the 1911 census, Albert&apos;s occupation was Main Layer - Gas Works, in the same year his fathers occupation was Engine Driver Gas works. \
     Subsequently, Alberts son Charles would spend his whole working life with the same gas company.</p>\
     <p>In 1942, during WWII, the family home in Englishcombe Lane, Bath sustained bomb damage and had to be demolished. Albert and Mary then lived \
     in a wooden shed in the back garden, until the house was rebuilt.</p>', // include <p></p>
     photos:[{picture:'https://www.dropbox.com/scl/fi/0pmv5lwvjcksc2n49tptj/englishcombeLnShed.jpg?rlkey=03u3i4f9sb087j2c1sinlf2xb&raw=1',
     pictureV:'https://www.dropbox.com/scl/fi/0pmv5lwvjcksc2n49tptj/englishcombeLnShed.jpg?rlkey=03u3i4f9sb087j2c1sinlf2xb&raw=1',
     pictureZ:'https://www.dropbox.com/scl/fi/0pmv5lwvjcksc2n49tptj/englishcombeLnShed.jpg?rlkey=03u3i4f9sb087j2c1sinlf2xb&raw=1',
     //ratio:1.33,
     title:'Albert and Mary Kent 1944',
     caption:'Albert and Mary Kent, in front of the shed at 169 Englishcombe Lane, July 1944',
     thumbnail:'./pictures/engLnShedThumb.avif',
     alt:'Albert and Mary Kent 1944'}// add photo &ap
    ]
    },
    { // Family 6 ==================================================================================================================
    records : ['censuses'],
    dad : { name: "Walter West", dates: "1855-1933", vektr:13},
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
    { // Family 7 ==================================================================================================================
    records : ['censuses','photos'],
        
    dad : { name: "William Smith", dates: "1851-1922", vektr:99},
    mum : { name: "Martha Hasler", dates: "1852-1935", vektr:8},
    kids : [{ name: "Jessie Alice Annie", dates: "1882-1973", vektr:0}//NEXT kid - kd
    ],
    familyName: 'William &amp; Martha Louisa Smith family', //use &amp; between dad and mum names
    censuses:[{address:'Somerset Industrial Home for Boys, Bath',
    gmap:'https://maps.app.goo.gl/c7k6ctM4kk3wvq9N7',
    // gmap:'none',
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
    ]} ,
    {address:'none',
    gmap:'none',
    dox:[{year:'1) Training certificate',
    occupation:'1876 W Smith - Saddlery training certificate',
    images:{wide:'./pictures/WSmithSaddlery.avif',
    narrow:'./pictures/WSmithSaddleryV.avif',
    zoomed: ''}},
    {year:'2) Testimonial',
    occupation:'William Smith - testimonial from the superintendant of Somerset Industrial Home for Boys',
    images:{wide:'https://www.dropbox.com/scl/fi/hm6spb85jle7setwc6yb3/WSreferenceSIHB.avif?rlkey=ebv78jfb9sijzbbwgft6xye2q&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/hm6spb85jle7setwc6yb3/WSreferenceSIHB.avif?rlkey=ebv78jfb9sijzbbwgft6xye2q&raw=1',
    zoomed: ''}},
    {year:'3) Portland Arms licence',
    occupation: '1897 - Licence for William Smith of the Portland Brewrey to sell Intoxicating Liquors', // include &#9474; after the year
    images:{wide:'https://www.dropbox.com/scl/fi/hh3ac9ze98hd509iu4fmm/portlandLicenceV01.avif?rlkey=ccofrn9inlu6b5r0z2h5p343g&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/hh3ac9ze98hd509iu4fmm/portlandLicenceV01.avif?rlkey=ccofrn9inlu6b5r0z2h5p343g&raw=1',
    zoomed: ''}},
    {year:'4) Beerhouse transfer',
    occupation: '1909 - transfer of the beerhouse licence for 16 Longmead Street to William Smith', // include &#9474; after the year
    images:{wide:'https://www.dropbox.com/scl/fi/50n440plf7wu9b453qhbt/licenceXfer.avif?rlkey=d4muhjvtunuwc1huhf3fw3tuf&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/50n440plf7wu9b453qhbt/licenceXfer.avif?rlkey=d4muhjvtunuwc1huhf3fw3tuf&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/50n440plf7wu9b453qhbt/licenceXfer.avif?rlkey=d4muhjvtunuwc1huhf3fw3tuf&raw=1'}},
    {year:'5) National Reg&apos;n',
    occupation: '5) William Smith - National Registration certificate - beerhouse and general store keeper', // include &#9474; after the year
    images:{wide:'https://www.dropbox.com/scl/fi/ph0j892jlmusmtxlwn07z/WSnatReg02.avif?rlkey=3v6ng22ktabimspo3pgv1dgcg&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/ple9ifyl18vstvwz8guos/WSnatReg02V.avif?rlkey=yy5qd2y0un2gigjrwccm88mkn&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/l82l7hdeqwoeylh36d8wd/WSnatReg.avif?rlkey=30s54rlkccb9hy6e69z17u1w1&raw=1'}},
    {year:'7) Trade testimonial',
    occupation: '7) 1922 - Martha Smith - trade supplier testimonial', // include &#9474; after the year
    images:{wide:'https://www.dropbox.com/scl/fi/31uu4bzp3a9spr2r6c0iv/MStestimonial.avif?rlkey=4q5bx0bvle2f5n7kbnjien50f&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/31uu4bzp3a9spr2r6c0iv/MStestimonial.avif?rlkey=4q5bx0bvle2f5n7kbnjien50f&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/31uu4bzp3a9spr2r6c0iv/MStestimonial.avif?rlkey=4q5bx0bvle2f5n7kbnjien50f&raw=1'}},
    {year:'8) Pension notice',
    occupation: '8) 1922 - Martha Smith - Notice of change of entitlement to the Old Age Pension', // include &#9474; after the year
    images:{wide:'https://www.dropbox.com/scl/fi/5mrby5nrz4z6wr0qm2abq/MSpension.avif?rlkey=ldwpnzjh5181eoew6m7uolqhl&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/5mrby5nrz4z6wr0qm2abq/MSpension.avif?rlkey=ldwpnzjh5181eoew6m7uolqhl&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/5mrby5nrz4z6wr0qm2abq/MSpension.avif?rlkey=ldwpnzjh5181eoew6m7uolqhl&raw=1'}},
    {year:'9) Aunt Nellie letter',
    occupation: '9) 1928 - Letter to Martha Smith from Aunt Nellie in Halifax, Nova Scotia', // include &#9474; after the year
    images:{wide:'https://www.dropbox.com/scl/fi/vrsyth7dwb99us6m6r0zk/nellieLetter.avif?rlkey=3ul7zppnvpj2d7n8ijg1jw5si&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/vrsyth7dwb99us6m6r0zk/nellieLetter.avif?rlkey=3ul7zppnvpj2d7n8ijg1jw5si&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/vrsyth7dwb99us6m6r0zk/nellieLetter.avif?rlkey=3ul7zppnvpj2d7n8ijg1jw5si&raw=1'}}// Add a year - cyr
    ]}// New address - cadd
    ],
    familyNotes: '<p>In 1876 William Smith was serving in Royal Engineers (15th Troop) with the trade role of Wheeler. \
    He then qualified for the additional role of Regimental Saddletree Maker. \
    He qualified at the Royal Dockyard, Woolwich (1). By 1881, while still in the Royal Engineers, \
    he was living in Aldershot where his daughter Jessie was born and christened. Later he left the army and moved with \
    his family to Bath possibly in 1890 where he started work as a carpenter at the \
    <a href="https://www.childrenshomes.org.uk/BathIH/index.shtml">Somerset Industrial Home for Boys</a> (2) where his \
    wife Martha Louisa was employed as a nurse.</p> \
    <p>In 1897 he became licensee of the Portland Brewery, also known as the Portland Arms, which was owned by the Bath \
    Brewery Ltd (3). The pub was at 12a Portland Place, Bath and he moved there with his family. He continued to also work \
    as a carpenter at the Industrial Home until 1906.</p> \
    <p>In 1909 William took over the license for 16 Longmead Street, Bath which was again owned by the Bath Brewery Ltd \
    (4). This was a grocery and off license beer retailer which also sold tobacco. His fire insurance policy allowed for \
    the storage and sale of &apos;petroleum&apos; which, considering that this was 1909/10, probably referred to paraffin. William \
    took over the license from Henry Gear and, presumably, moved there with his wife. In 1915, during World War I, William \
    registered as a Beer House and General Store Keeper at 16 Longmead Street under \
    <a href="https://en.wikipedia.org/wiki/National_Registration_Act_1915">the National Registration Act, 1915</a> \
    (5,6). In 1918 and 1919 William was a member of the Gas, Municipal and General Workers Union. He continued to live at \
    16 Longmead Street until his death, sometime shortly before the end of April 1922.<\p> \
    <p>In 1922 Martha Louisa Smith, who was by then about 70, was living at 16 Longmead Street when she was widowed shortly \
    before 28th April. At the end of April and into May she began the process of applying for the transfer of the license \
    receiving testimonials (7) as well as a verification of testimonials from Twerton Police Station. At the same time her \
    pension eligibility was reviewed by Customs and Excise who found that she was no longer entitled to a pension because \
    all of the profit from the business would be hers alone not shared with William (8). Towards the end of October Martha \
    received a copy of &apos;License-Holders Handy Guide&apos; at 16 Longmead Street.</p>\
    <p>By 1928 Martha had moved to 28 South View Road to live with her daughter Jessie and her family. She received a \
    letter from Nellie - &apos;your loving sister&apos; - living in Halifax, Nova Scotia (9). It is thought that it was her \
    sister-in-law Ellen, one of William&apos;s sisters. Nellie says that she is pleased to hear that Martha is now living \
    with Jessie and her family. In February 1930 in another letter from Nellie she comments on Martha&apos;s recent serious \
    illness and is glad that she is, at the age of 79, getting over it. A further letter was received in December to \
    which Martha replied in July 1931. There is a later photograph of Aunt Nellie dated 1941 (10,11). During this time \
    Martha also received letters from Whitham in Essex.</p> \
    <p>Martha Louisa died at 28 South View Road on 2nd July 1935 and was interred at Twerton Cemetery.</p>',// include <p></p>
    photos:[{picture:'https://www.dropbox.com/scl/fi/uvaxfuhpgxstwe4lishtz/PortlandArms03.avif?rlkey=aaji71q4pwqr833yux6wwp6q7&raw=1',
    pictureV:'https://www.dropbox.com/scl/fi/uvaxfuhpgxstwe4lishtz/PortlandArms03.avif?rlkey=aaji71q4pwqr833yux6wwp6q7&raw=1',
    pictureZ:'https://www.dropbox.com/scl/fi/uvaxfuhpgxstwe4lishtz/PortlandArms03.avif?rlkey=aaji71q4pwqr833yux6wwp6q7&raw=1',
    // ratio:0.793,
    title:'The Portland Arms, photograph 1947, demolished 1969.',
    caption:'The Portland Arms, photograph 1947, demolished 1969. William and Martha Smith were licencees at the start of the twentieth century.',
    thumbnail:'./pictures/PortlandArmsThumb.jpg',
    alt:"Portland Arms, Bath 1947"},
    {picture:'https://www.dropbox.com/scl/fi/57hsikcixj47bjsqdxlbf/jessieMarthaWill-02.avif?rlkey=omqv6hg3flqa5dxm11ysyl0kh&raw=1',
    pictureV:'https://www.dropbox.com/scl/fi/57hsikcixj47bjsqdxlbf/jessieMarthaWill-02.avif?rlkey=omqv6hg3flqa5dxm11ysyl0kh&raw=1',
    pictureZ:'https://www.dropbox.com/scl/fi/57hsikcixj47bjsqdxlbf/jessieMarthaWill-02.avif?rlkey=omqv6hg3flqa5dxm11ysyl0kh&raw=1',
    //ratio:1.01,
    title:'1915 - Martha and William with daughter Jessie and four grandchildren',
    caption:'1915 - L to R rear: Martha Smith, Jessie West holding Cyril, William Smith, front: Leonard, Joyce, Doris',
    thumbnail:'./pictures/jessieMarthaWill-thumb.avif',
    alt:'Jessie West with parents and 4 children'},
    {picture:'https://www.dropbox.com/scl/fi/6kpjf8jl11vixx1yjny18/nellieAndNote01.avif?rlkey=wfa2egrqvgcdj96m065g7g0ly&raw=1',
    pictureV:'https://www.dropbox.com/scl/fi/9z29wu2av6d7uyclsofn6/nelliePhoto.avif?rlkey=ni3c81mhxm2jdyyknefshmj89&raw=1',
    pictureZ:'https://www.dropbox.com/scl/fi/jw5yui7o18vp0r317ihzw/nellieReverse.avif?rlkey=rjsilyalj27xg68odcj3zdnix&raw=1',
    //ratio:0.71,
    title:'Aunt Nellie aged 81 - 1941',
    caption:'"Aunt Nellie" Born 1860 (January) Photo taken 1941',
    thumbnail:'./pictures/nellieThumb.avif',
    alt:'Aunt Nellie 1941 aged 81'}
    ]
    
    },
    { // Family 8 =============================================================================================================
    records : ['censuses'],
    dad : { name: "Henry Hasler", dates: "1825-1908", vektr:99},
    mum : { name: "Mary Ann", dates: "1831-1914", vektr:99},
    kids : [{ name: "Martha Louisa", dates: "1852-1935", vektr:7},
    { name: "William Peter", dates: "1854-1936", vektr:11},
    { name: "Eliza", dates: "1856-1887", vektr:99},
    { name: "Thomas", dates: "1859-1928", vektr:99},
    { name: "Dorcas", dates: "1864-1937", vektr:99},
    { name: "Henry (Harry)", dates: "18??-1???", vektr:99},
    { name: "Frederick", dates: "1871-1955", vektr:99}//NEXT kid - kd
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
    { // Family 9 ==================================================================================================================
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
    { // Family 10 ================================================================================================================
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
    a major centre of the railway industry. In the 1871 and 1881 censuses George&apos;s occupation was then shown as &apos;Railway Labourer&apos;.\
    In 1891 it was &apos;Shed Labourer&apos;.\
    The Great Western Railway had reached Didcot around 30 years previously and Hagbourne Newtown was a settlement built for the \
    rapidly expanding population of the town.\
    <a href='https://www.didcot.gov.uk/brief-history#heading-1047124'> (see Didcot brief history).</a><\p>\
    <p>After moving to Bath, his occupation was &apos;stationary engine driver&apos; (in the 1901 census) and &apos;engine driver gas works&apos;\
     (in 1911).",
    },
    
    { // Family 11 ==========================================================================================================
    records : ['empty'],
    dad : { name: "William Hasler", dates: "1854-1936", vektr:8},
    mum : { name: "Maria Baker", dates: "1856-1934", vektr:99},
    kids : [{ name: "Douglas William", dates: "1882-1965", vektr:12},
    { name: "Beatrice Ethel", dates: "1884-19??", vektr:99}//NEXT kid - kd
    ]// Add census info - csus
    },
    { // Family 12 ==========================================================================================================
    records : ['empty'],
    dad : { name: "Douglas Hasler", dates: "1882-1965", vektr:11},
    mum : { name: "Violet Collins", dates: "1886-1968", vektr:99},
    kids : [{ name: "Joan Mary", dates: "1924-2022", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 13 ==============================================================================================
    records : ['empty'],
    dad : { name: "George West", dates: "1811-1891", vektr:99},
    mum : { name: "Sarah Dunford", dates: "1811-1???", vektr:99},
    kids : [{ name: "James", dates: "1830-????", vektr:99},
    { name: "Emma", dates: "1833-????", vektr:99},
    { name: "George", dates: "1837-????", vektr:99},
    { name: "Eliza", dates: "1841-????", vektr:99},
    { name: "Edward", dates: "1844-????", vektr:99},
    { name: "Elizabeth", dates: "1846-????", vektr:99},
    { name: "Thomas", dates: "1851-????", vektr:99},
    { name: "Walter", dates: "1855-1933", vektr:6}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 14 ==========================================================================================
    records : ['empty'],
    dad : { name: "Daniel Howden", dates: "1977", vektr:99},
    mum : { name: "Katherine Kent", dates: "1977", vektr:2},
    kids : []
    //] // Add census info - csus
    },
    { // Family 15
    records : ['empty'],
    dad : { name: "Kevin Pope", dates: "1980", vektr:99},
    mum : { name: "Leah Kent", dates: "1981", vektr:2},
    kids : [{ name: "Thomas Nicholas", dates: "2011", vektr:99},
    {name: "Benjamin", dates: "2013", vektr:99}//NEXT kid - kd
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


