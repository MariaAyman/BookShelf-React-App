import { CHANGE_SHELF, SHOW_ALL } from '../Constants/actions-types'


const initialState = {
    books: [
        {
          id: 0,
          title: 'Under the Whispering Door',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597281498l/53205888.jpg',
          author: 'T.J. Klune',
          description: "When a reaper comes to collect Wallace Price from his own funeral, Wallace suspects he really might be dead.\n\nInstead of leading him directly to the afterlife, the reaper takes him to a small village. On the outskirts, off the path through the woods, tucked between mountains, is a particular tea shop, run by a man named Hugo. Hugo is the tea shop's owner to locals and the ferryman to souls who need to cross over.\n\nBut Wallace isn't ready to abandon the life he barely lived. With Hugo's help he finally starts to learn about all the things he missed in life.\n\nWhen the Manager, a curious and powerful being, arrives at the tea shop and gives Wallace one week to cross over, Wallace sets about living a lifetime in seven days.",
          rate: '4.38/5',
          genre: 'Romance novel, Contemporary fantasy, Fantasy Fiction, Fantasy comedy, Gay Fiction',
          shelfNo: 1
        },
        {
          id: 1,
          title: "Shadow and Bone",
          cover: "https://images-na.ssl-images-amazon.com/images/I/816JhuO1cyS.jpg",
          author: "Leigh Bardugo",
          series: "Grishaverse #1, The Shadow and Bone Trilogy #1",
          description: "Surrounded by enemies, the once-great nation of Ravka has been torn in two by the Shadow Fold, a swath of near impenetrable darkness crawling with monsters who feast on human flesh. Now its fate may rest on the shoulders of one lonely refugee.",
          rate: "3.97/5",
          genre: 'Young adult fiction, Fantasy Fiction, High fantasy, Adventure fiction',
          shelfNo: 1
        },
        {
          id: 2,
          title: "What Lies Between Us",
          cover: "https://images-na.ssl-images-amazon.com/images/I/81sYus08gJS.jpg",
          author: "John Marrs",
          description: "They say every house has its secrets, and the house that Maggie and Nina have shared for so long is no different. Except that these secrets are not buried in the past.",
          rate: "4.01/5",
          genre: 'Thriller, Suspense, Psychological thriller, Psychological Fiction',
          shelfNo: 3
        },
        {
          id: 3,
          title: "Queen of Air and Darkness",
          cover: "https://images-na.ssl-images-amazon.com/images/I/81GINBuWPOL.jpg",
          author: "Cassandra Clare",
          series: "The Dark Artifices #3",
          description: "Innocent blood has been spilled on the steps of the Council Hall, the sacred stronghold of the Shadowhunters. In the wake of the tragic death of Livia #fffthorn, the Clave teeters on the brink of civil war. One fragment of the Blackthorn family flees to Los Angeles, seeking to discover the source of the disease that is destroying the race of warlocks.",
          rate: "4.35/5",
          genre: 'Novel, Fantasy Fiction',
          shelfNo: 1
        },
        {
          id: 4,
          title: "Bird Box",
          cover: "https://images-na.ssl-images-amazon.com/images/I/81SRiprjQSL.jpg",
          author: "Josh Malerman",
          series: "Bird Box #1",
          description: "Something is out there, something terrifying that must not be seen. One glimpse of it, and a person is driven to deadly violence. No one knows what it is or where it came from.",
          rate: "4.02/5",
          genre: 'Novel, Thriller, Horror fiction, Suspense, Apocalyptic and post-apocalyptic fiction',
          shelfNo: 2
        },
        {
          id: 5,
          title: "Fable",
          cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590354131l/44012880.jpg",
          author: "Adrienne Young",
          series: "Fable #1",
          description: " To survive she must keep to herself, learn to trust no one, and rely on the unique skills her mother taught her.",
          rate: "4.12/5",
          genre: 'Fantasy Fiction, Adventure fiction',
          shelfNo: 2
        },
        {
          id: 6,
          title: "From Blood and Ash",
          cover: "https://images-na.ssl-images-amazon.com/images/I/71pwuCf+SML.jpg",
          author: "Jennifer L. Armentrout",
          series: "Blood and Ash #1",
          description: "Chosen from birth to usher in a new era, Poppy’s life has never been her own. The life of the Maiden is solitary.",
          rate: "4.3/5",
          genre: 'Romance novel, Fantasy Fiction',
          shelfNo: 2
        },
        {
          id: 7,
          title: "Renegades",
          cover: "https://images-na.ssl-images-amazon.com/images/I/91rnoWEyXuL.jpg",
          author: "Marissa Meyer",
          series: "Renegades #1",
          description: "Secret Identities. Extraordinary Powers. She wants vengeance. He wants justice. The Renegades are a syndicate of prodigies — humans with extraordinary abilities — who emerged from the ruins of a crumbled society and established peace.",
          rate: "4.14/5",
          genre: 'Science fiction, Fantasy Fiction',
          shelfNo: 2
        },
        {
          id: 8,
          title: "A Darker Shade of Magic",
          cover: "https://images-na.ssl-images-amazon.com/images/I/91862PUkoDL.jpg",
          author: "V.E. Schwab",
          series: "Shades of Magic #1",
          description: "Kell is one of the last Antari—magicians with a rare, coveted ability to travel between parallel Londons; Red, Grey, White, and, once upon a time, Black.",
          rate: "4.06/5",
          genre: 'Novel, Fantasy Fiction, Science fiction',
          shelfNo: 2
        },
        {
          id: 9,
          title: "The Night Circus",
          cover: "https://images-na.ssl-images-amazon.com/images/I/815D5sneiNL.jpg",
          author: "Erin Morgenstern",
          description: "The circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not. Within the black-and-white striped canvas tents is an utterly unique experience full of breathtaking amazements. It is called Le Cirque des Rêves, and it is only open at night.",
          rate: "4.03/5",
          genre: 'Novel, Fantasy Fiction, Romance novel, High fantasy',
          shelfNo: 0
        },
        {
          id: 10,
          title: "Throne of Glass",
          cover: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4088/9781408832332.jpg",
          author: "Sarah J. Maas",
          series: "Throne of Glass #1",
          description: "After serving out a year of hard labor in the salt mines of Endovier for her crimes, 18-year-old assassin Celaena Sardothien is dragged before the Crown Prince. Prince Dorian offers her her freedom on one condition: she must act as his champion in a competition to find a new royal assassin.",
          rate: "4.19/5",
          genre: 'Fantasy Fiction',
          shelfNo: 2
        },
        {
          id: 11,
          title: "Any Way the Wind Blows",
          cover: "https://images-na.ssl-images-amazon.com/images/I/51GXCC6rQCL._SX326_BO1,204,203,200_.jpg",
          author: "Rainbow Rowell",
          series: "Simon Snow #3",
          description: "In Carry On, Simon Snow and his friends realized that everything they thought they understood about the world might be wrong. And in Wayward Son, they wondered whether everything they understood about themselves might be wrong. In Any Way the Wind Blows, Simon and Baz and Penelope and Agatha have to decide how to move forward.",
          rate: "4.3/5",
          genre: 'Fantasy Fiction',
          shelfNo: 3
        },
        {
          id: 12,
          title: "Wayward Son",
          cover: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-224,pr-true,bl/edition/9781509896905.jpg",
          author: "Rainbow Rowell",
          series: "Simon Snow #2",
          description: "The story is supposed to be over. Simon Snow did everything he was supposed to do. He beat the villain. He won the war. He even fell in love. Now comes the good part, right? Now comes the happily ever after… So why can’t Simon Snow get off the couch?",
          rate: "3.99/5",
          genre: 'Fantasy Fiction',
          shelfNo: 3
        },
        {
          id: 13,
          title: "A Court of Silver Flames",
          cover: "https://i.pinimg.com/originals/f3/ae/56/f3ae56fff813004d3e5b31703e4f6e63.jpg",
          author: "Sarah J. Maas",
          series: "A Court of Thorns and Roses #4",
          description: "Nesta Archeron has always been prickly-proud, swift to anger, and slow to forgive. And ever since being forced into the Cauldron and becoming High Fae against her will, she's struggled to find a place for herself within the strange, deadly world she inhabits. Worse, she can't seem to move past the horrors of the war with Hybern and all she lost in it.",
          rate: "4.39/5",
          genre: 'Fantasy Fiction, Romance novel, Romantic fantasy',
          shelfNo: 2
        },
        {
          id: 14,
          title: "Carry On",
          cover: "https://images.squarespace-cdn.com/content/5504b49be4b0953c7cb8e0d4/1481858861353-RBSFAGWUFKOY1FBS3R1D/?content-type=image%2Fjpeg",
          author: "Rainbow Rowell",
          series: "Simon Snow #1",
          description: "Simon Snow is the worst Chosen One who's ever been chosen.",
          rate: "4.2/5",
          genre: 'Novel, Young adult fiction, Fantasy Fiction, High fantasy, Urban fantasy',
          shelfNo: 3
        },
        {
          id: 15,
          title: "Fangirl",
          cover: "https://images-na.ssl-images-amazon.com/images/I/71V6jdEaW2L.jpg",
          author: "Rainbow Rowell",
          description: "Cath is a Simon Snow fan. Okay, the whole world is a Simon Snow fan.... But for Cath, being a fan is her life—and she's really good at it. She and her twin, Wren, ensconced themselves in the Simon Snow series when they were just kids; it's what got them through their mother leaving.",
          rate: "4.01/5",
          genre: 'Novel, Young adult fiction',
          shelfNo: 0
        },
        {
          id: 16,
          title: "Sorcery of Thorns",
          cover: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534445383/sorcery-of-thorns-9781534445383_lg.jpg",
          author: "Margaret Rogerson",
          description: "All sorcerers are evil. Elisabeth has known that as long as she has known anything. Raised as a foundling in one of Austermeer’s Great Libraries, Elisabeth has grown up among the tools of sorcery—magical grimoires that whisper on shelves and rattle beneath iron chains. If provoked, they transform into grotesque monsters of ink and leather. She hopes to become a warden, charged with protecting the kingdom from their power.",
          rate: "4.09/5",
          genre: 'Fantasy Fiction',
          shelfNo: 3
        },
        {
          id: 17,
          title: "Legendborn",
          cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598382979l/50892338.jpg",
          author: "Tracy Deonn",
          series: "Legendborn #1",
          description: "After her mother dies in an accident, sixteen-year-old Bree Matthews wants nothing to do with her family memories or childhood home. A residential program for bright high schoolers at UNC–Chapel Hill seems like the perfect escape—until Bree witnesses a magical attack her very first night on campus.",
          rate: "4.45/5",
          genre: 'Young adult fiction, Fantasy Fiction',
          shelfNo: 3
        },
        {
          id: 18,
          title: "The Midnight Library",
          cover: "https://images-na.ssl-images-amazon.com/images/I/718GcuXHXbL.jpg",
          author: "Matt Haig",
          description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices . . . Would you have done anything different, if you had the chance to undo your regrets?",
          rate: "4.12/5",
          genre: 'Science fiction, Fantasy Fiction, Philosophical fiction',
          shelfNo: 3
        },
        {
          id: 19,
          title: "The Invisible Life of Addie LaRue",
          cover: "https://m.media-amazon.com/images/I/91Ql48Y0mqL.jpg",
          author: "V.E. Schwab",
          description: "France, 1714: in a moment of desperation, a young woman makes a Faustian bargain to live forever and is cursed to be forgotten by everyone she meets.",
          rate: "4.26/5",
          genre: 'Fantasy Fiction, Historical Fiction, Historical fantasy',
          shelfNo: 3
        },
        {
          id: 20,
          title: "They Both Die at the End",
          cover: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781471166204/they-both-die-at-the-end-9781471166204_hr.jpg",
          author: "Adam Silvera",
          description: "On September 5, a little after midnight, Death-Cast calls Mateo Torrez and Rufus Emeterio to give them some bad news: They’re going to die today.",
          rate: "4.07/5",
          genre: 'Young adult fiction, Adventure fiction, LGBT literature',
          shelfNo: 3
        },
        {
          id: 21,
          title: "Harry Potter and the Sorcerer's Stone",
          cover: 'https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg',
          author: 'J.K. Rowling',
          series: 'Harry Potter #1',
          description: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.",
          rate: '4.47/5',
          genre: "Novel, Children's literature, Fantasy Fiction, High fantasy",
          shelfNo: 2
        },
        {
          id: 22,
          title: 'Harry Potter and the Chamber of Secrets',
          cover: 'https://m.media-amazon.com/images/I/71MUiF4iVzL._AC_SY679_.jpg',
          author: 'J.K. Rowling',
          series: 'Harry Potter #2',
          description: 'Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike.',
          rate: '4.43/5',
          genre: 'Novel, Fantasy Fiction, Bildungsroman, High fantasy, Adventure fiction',
          shelfNo: 0
        },
        {
          id: 23,
          title: 'Harry Potter and the Prisoner of Azkaban',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/81lAPl9Fl0L.jpg',
          author: 'J.K. Rowling',
          series: 'Harry Potter #3',
          description: "For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black. Convicted of killing thirteen people with a single curse, he was said to be the heir apparent to the Dark Lord, Voldemort.\n\nNow he has escaped, leaving only two clues as to where he might be headed: Harry Potter's defeat of You-Know-Who was Black's downfall as well. And the Azkaban guards heard Black muttering in his sleep, 'He's at Hogwarts . . . he's at Hogwarts.'",
          rate: '4.57/5',
          genre: 'Novel, Fantasy Fiction',
          shelfNo: 0
        },
        {
          id: 24,
          title: 'Harry Potter and the Goblet of Fire',
          cover: 'https://m.media-amazon.com/images/I/71ykU-RQ0nL._AC_SL1000_.jpg',
          author: 'J.K. Rowling',
          series: 'Harry Potter #4',
          description: "Harry Potter is midway through his training as a wizard and his coming of age. Harry wants to get away from the pernicious Dursleys and go to the International Quidditch Cup with Hermione, Ron, and the Weasleys. He wants to dream about Cho Chang, his crush (and maybe do more than dream). He wants to find out about the mysterious event that's supposed to take place at Hogwarts this year, an event involving two other rival schools of magic, and a competition that hasn't happened for hundreds of years. He wants to be a normal, fourteen-year-old wizard. But unfortunately for Harry Potter, he's not normal - even by wizarding standards.\n\nAnd in his case, different can be deadly.",
          rate: '4.56/5',
          genre: 'Novel, Fantasy Fiction, High fantasy',
          shelfNo: 0
        },
        {
          id: 25,
          title: 'Harry Potter and the Order of the Phoenix',
          cover: 'https://m.media-amazon.com/images/I/71xcuT33RpL._AC_SY679_.jpg',
          author: 'J.K. Rowling',
          series: 'Harry Potter #5',
          description: 'There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror?\n\nHarry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named - a threat that neither the magical government nor the authorities at Hogwarts can stop.',
          rate: '4.50/5',
          genre: 'Novel, Young adult fiction, Fantasy Fiction',
          shelfNo: 0
        },
        {
          id: 26,
          title: 'Harry Potter and the Half-Blood Prince',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/51uO1pQc5oL._SX329_BO1,204,203,200_.jpg',
          author: 'J.K. Rowling',
          series: 'Harry Potter #6',
          description: 'The war against Voldemort is not going well; even Muggle governments are noticing. Ron scans the obituary pages of the Daily Prophet, looking for familiar names. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses.',
          rate: '4.57/5',
          genre: 'Novel, Young adult fiction, Fantasy Fiction, Adventure fiction',
          shelfNo: 0
        },
        {
          id: 27,
          title: 'Harry Potter and the Deathly Hallows',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/71sH3vxziLL.jpg',
          author: 'J.K. Rowling',
          series: 'Harry Potter #7',
          description: "It's no longer safe for Harry at Hogwarts, so he and his best friends, Ron and Hermione, are on the run. Professor Dumbledore has given them clues about what they need to do to defeat the dark wizard, Lord Voldemort, once and for all, but it's up to them to figure out what these hints and suggestions really mean. Their cross-country odyssey has them searching desperately for the answers, while evading capture or death at every turn. At the same time, their friendship, fortitude, and sense of right and wrong are tested in ways they never could have imagined. The ultimate battle between good and evil that closes out this final chapter of the epic series takes place where Harry's Wizarding life began: at Hogwarts. The satisfying conclusion offers shocking last-minute twists, incredible acts of courage, powerful new forms of magic, and the resolution of many mysteries. Above all, this intense, cathartic book serves as a clear statement of the message at the heart of the Harry Potter series: that choice matters much more than destiny, and that love will always triumph over death.",
          rate: '4.61/5',
          genre: "Novel, Children's literature, Young adult fiction, Fantasy Fiction, Mystery, Thriller, Magical Realism, Adventure fiction",
          shelfNo: 0
        },
        {
          id: 28,
          title: 'Siege and Storm',
          cover: 'https://diwanegypt.com/wp-content/uploads/2020/08/9781510105263.jpg',
          author: 'Leigh Bardugo',
          series: 'Grishaverse #2, The Shadow and Bone Trilogy #2',
          description: 'Hunted across the True Sea, haunted by the lives she took on the Fold, Alina must try to make a life with Mal in an unfamiliar land, all while keeping her identity as the Sun Summoner a secret. But she can’t outrun her past or her destiny for long.\n\nThe Darkling has emerged from the Shadow Fold with a terrifying new power and a dangerous plan that will test the very boundaries of the natural world. With the help of a notorious privateer, Alina returns to the country she abandoned, determined to fight the forces gathering against Ravka. But as her power grows, Alina slips deeper into the Darkling’s game of forbidden magic, and farther away from Mal. Somehow, she will have to choose between her country, her power, and the love she always thought would guide her—or risk losing everything to the oncoming storm.',
          rate: '3.88/5',
          genre: 'Fantasy Fiction',
          shelfNo: 2
        },
        {
          id: 29,
          title: 'Ruin and Rising',
          cover: 'https://m.media-amazon.com/images/I/517PM0n+MQL.jpg',
          author: 'Leigh Bardugo',
          series: 'Grishaverse #3, The Shadow and Bone Trilogy #3',
          description: "The Darkling rules Ravka from his shadow throne.\n\nNow the nation's fate rests with a broken Sun Summoner, a disgraced tracker, and the shattered remnants of a once-great magical army.\n\nDeep in an ancient network of tunnels and caverns, a weakened Alina must submit to the dubious protection of the Apparat and the zealots who worship her as a Saint. Yet her plans lie elsewhere, with the hunt for the elusive firebird and the hope that an outlaw prince still survives.",
          rate: '4.05/5',
          genre: 'Fantasy Fiction',
          shelfNo: 2
        },
        {
          id: 30,
          title: 'Six of Crows',
          cover: 'https://images.gr-assets.com/books/1459349344l/23437156.jpg?w=640',
          author: 'Leigh Bardugo',
          series: 'Grishaverse #4, Six of Crows #1',
          description: 'Ketterdam: a bustling hub of international trade where anything can be had for the right price—and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can’t pull it off alone. . . .',
          rate: '4.47/5',
          genre: 'Young adult fiction, Fantasy Fiction',
          shelfNo: 2
        },
        {
          id: 31,
          title: 'Crooked Kingdom',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/91EVnJvVTjL.jpg',
          author: 'Leigh Bardugo',
          series: 'Grishaverse #5, Six of Crows #2',
          description: "Kaz Brekker and his crew of deadly outcasts have just pulled off a heist so daring even they didn't think they'd survive. But instead of divvying up a fat reward, they're right back to fighting for their lives.",
          rate: '4.59/5',
          genre: 'Young adult fiction, Novel, Fantasy Fiction',
          shelfNo: 0
        },
        {
          id: 32,
          title: 'King of Scars',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525110798l/39804936.jpg',
          author: 'Leigh Bardugo',
          series: 'Grishaverse #6, King of Scars #1',
          description: "The dashing young king, Nikolai Lantsov, has always had a gift for the impossible. No one knows what he endured in his country's bloody civil war--and he intends to keep it that way. Now, as enemies gather at his weakened borders, Nikolai must find a way to refill Ravka's coffers, forge new alliances, and stop a rising threat to the once-great Grisha Army.",
          rate: '4.20/5',
          genre: 'Novel, Fantasy Fiction, Adventure fiction',
          shelfNo: 0
        },
        {
          id: 33,
          title: 'Rule of Wolves',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/71y+rJUs5jL.jpg',
          author: 'Leigh Bardugo',
          series: 'Grishaverse #7, King of Scars #2',
          description: 'The Grishaverse will be coming to Netflix soon with Shadow and Bone, an original series!\n\nThe wolves are circling and a young king will face his greatest challenge in the explosive finale of the instant #1 New York Times-bestselling King of Scars Duology.',
          rate: '4.41/5',
          genre: 'Fantasy Fiction, Adventure fiction',
          shelfNo: 0
        },
        {
          id: 34,
          title: 'Lady Midnight',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/81msoL7XIeL.jpg',
          author: 'Cassandra Clare',
          series: 'The Dark Artifices #1',
          description: 'It’s been five years since the events of City of Heavenly Fire that brought the Shadowhunters to the brink of oblivion. Emma Carstairs is no longer a child in mourning, but a young woman bent on discovering what killed her parents and avenging her losses.\n\nTogether with her parabatai Julian Blackthorn, Emma must learn to trust her head and her heart as she investigates a demonic plot that stretches across Los Angeles, from the Sunset Strip to the enchanted sea that pounds the beaches of Santa Monica. If only her heart didn’t lead her in treacherous directions…',
          rate: '4.35/5',
          genre: 'Novel, Fantasy Fiction, Paranormal fiction',
          shelfNo: 3
        },
        {
          id: 35,
          title: 'Lord of Shadows',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/71O3MJTc0yL.jpg',
          author: 'Cassandra Clare',
          series: 'The Dark Artifices #2',
          description: 'A Shadowhunter’s life is bound by duty. Constrained by honor. The word of a Shadowhunter is a solemn pledge, and no vow is more sacred than the vow that binds parabatai, warrior partners—sworn to fight together, die together, but never to fall in love.\n\nEmma Carstairs has learned that the love she shares with her parabatai, Julian Blackthorn, isn’t just forbidden—it could destroy them both. She knows she should run from Julian. But how can she when the Blackthorns are threatened by enemies on all sides?',
          rate: '4.43/5',
          genre: 'Novel, Fantasy Fiction, Paranormal fiction',
          shelfNo: 3
        },
        {
          id: 36,
          title: 'Malorie',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/81yQVuI1amL.jpg',
          author: 'Josh Malerman',
          series: 'Bird Box #2',
          description: 'Twelve years after Malorie and her children rowed up the river to safety, a blindfold is still the only thing that stands between sanity and madness. One glimpse of the creatures that stalk the world will drive a person to unspeakable violence. There remains no explanation. No solution.\n\nAll Malorie can do is survive.\nBut then comes what feels like impossible news. And with it, the first time Malorie has allowed herself to hope. Someone very dear to her, someone she believed dead, may be alive.',
          rate: '3.84/5',
          genre: 'Thriller, Horror fiction, Suspense',
          shelfNo: 0
        },
        {
          id: 37,
          title: 'Namesake',
          cover: 'https://prodimage.images-bn.com/pimages/9781250254399_p0_v2_s550x406.jpg',
          author: 'Adrienne Young',
          series: 'Fable #2',
          description: 'Welcome to a world made dangerous by the sea and by those who wish to profit from it. Where a young girl must find her place and her family while trying to survive in a world built for men.\n\nWith the Marigold ship free of her father, Fable and the rest of the crew were set to start over. That freedom is short-lived when Fable becomes a pawn in a notorious thug’s scheme. In order to get to her intended destination, she must help him to secure a partnership with Holland, a powerful gem trader who is more than she seems.',
          rate: '4.13/5',
          genre: 'Novel, Bildungsroman, Domestic Fiction',
          shelfNo: 0
        },
        {
          id: 38,
          title: 'A Kingdom of Flesh and Fire',
          cover: 'https://kbimages1-a.akamaihd.net/38648568-c149-4d5b-89cd-2291fe21c7ab/1200/1200/False/a-kingdom-of-flesh-and-fire.jpg',
          author: 'Jennifer L. Armentrout',
          series: 'Blood and Ash #2',
          description: 'Everything Poppy has ever believed in is a lie, including the man she was falling in love with. Thrust among those who see her as a symbol of a monstrous kingdom, she barely knows who she is without the veil of the Maiden. But what she does know is that nothing is as dangerous to her as him. The Dark One. The Prince of Atlantia. He wants her to fight him, and that’s one order she’s more than happy to obey. He may have taken her, but he will never have her.',
          rate: '4.48/5',
          genre: 'Romance novel, Fantasy Fiction, Paranormal fiction',
          shelfNo: 2
        },
        {
          id: 39,
          title: 'The ​Crown of Gilded Bones',
          cover: 'https://m.media-amazon.com/images/I/51iVADM40EL.jpg',
          author: 'Jennifer L. Armentrout',
          series: 'Blood and Ash #3',
          description: 'Poppy never dreamed she would find the love she’s found with Prince Casteel. She wants to revel in her happiness but first they must free his brother and find hers. It’s a dangerous mission and one with far-reaching consequences neither dreamed of. Because Poppy is the Chosen, the Blessed. The true ruler of Atlantia. She carries the blood of the King of Gods within her. By right the crown and the kingdom are hers.',
          rate: '4.26/5',
          genre: 'Romance novel, Romantic fantasy, Fantasy Fiction, Paranormal Fantasy, Paranormal fiction',
          shelfNo: 0
        },
        {
          id: 40,
          title: 'The War of Two Queens',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/71RG6NqeoFS.jpg',
          author: 'Jennifer L. Armentrout',
          series: 'Blood and Ash #4',
          description: 'From #1 New York Times bestselling author Jennifer L. Armentrout comes book four in her Blood and Ash series.\n\nWar is only the beginning…',
          rate: '4.77/5',
          genre: 'Romantic fantasy, Vampire literature',
          shelfNo: 0
        },
        {
          id: 41,
          title: 'Archenemies',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/81QldCJ-OSL.jpg',
          author: 'Marissa Meyer',
          series: 'Renegades #2',
          description: "Time is running out.\nTogether, they can save the world.\nBut they each other's worst nightmare.\n\nIn Renegades, Nova and Adrian (aka Insomnia and Sketch) fought the battle of their lives against the Anarchist known as the Detonator. It was a short-lived victory.\n\nThe Anarchists still have a secret weapon, one that Nova believes will protect her. The Renegades also have a strategy for overpowering the Anarchists, but both Nova and Adrian understand that it could mean the end of Gatlon City - and the world - as they know it.",
          rate: '4.30/5',
          genre: 'Science fiction, Adventure fiction',
          shelfNo: 2
        },
        {
          id: 42,
          title: 'Supernova',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1557159835l/42771754.jpg',
          author: 'Marissa Meyer',
          series: 'Renegades #3',
          description: "The epic conclusion to Marissa Meyer's thrilling Renegades Trilogy finds Nova and Adrian fighting to keep their identities secret. While the battle rages on between their alter egos and their allies, there is a darker threat shrouding Gatlon City.\n\nThe Renegades' worst enemy is back among them, threatening to reclaim Gatlon City. Nova and Adrian must brave lies and betrayal to protect those they love. Their greatest fears are about to come to life, and unless they can bridge the divide between heroes and villains, they stand to lose everything. Including each other.",
          rate: '4.42/5',
          genre: 'Science fiction, Adventure fiction',
          shelfNo: 0
        },
        {
          id: 43,
          title: 'A Gathering of Shadows',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/91xZ2baMnFL.jpg',
          author: 'V.E. Schwab',
          series: 'Shades of Magic #2',
          description: "It has been four months since a mysterious obsidian stone fell into Kell's possession. Four months since his path crossed with Delilah Bard. Four months since Prince Rhy was wounded, and since the nefarious Dane twins of White London fell, and four months since the stone was cast with Holland's dying body through the rift--back into Black London.",
          rate: '4.24/5',
          genre: 'Fantasy Fiction, Historical fantasy',
          shelfNo: 0
        },
        {
          id: 44,
          title: 'A Conjuring of Light',
          cover: 'https://m.media-amazon.com/images/I/515M7kmM8rL.jpg',
          author: 'V.E. Schwab',
          series: 'Shades of Magic #3',
          description: 'Witness the fate of beloved heroes - and enemies.\n\nTHE BALANCE OF POWER HAS FINALLY TIPPED...\nThe precarious equilibrium among four Londons has reached its breaking point. Once brimming with the red vivacity of magic, darkness casts a shadow over the Maresh Empire, leaving a space for another London to rise.',
          rate: '4.32/5',
          genre: 'Fantasy Fiction, Science fiction, Historical fantasy',
          shelfNo: 0
        },
        {
          id: 45,
          title: 'Crown of Midnight',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/51hl1Iwbn5L._SX320_BO1,204,203,200_.jpg',
          author: 'Sarah J. Maas',
          series: 'Throne of Glass #2',
          description: 'From the throne of glass rules a king with a fist of iron and a soul as black as pitch. Assassin Celaena Sardothien won a brutal contest to become his Champion. Yet Celaena is far from loyal to the crown. She hides her secret vigilantly; she knows that the man she serves is bent on evil.',
          rate: '4.36/5',
          genre: 'Fantasy Fiction, High fantasy, Romantic fantasy',
          shelfNo: 2
        },
        {
          id: 46,
          title: 'Heir of Fire',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/81llrSzEqJL.jpg',
          author: 'Sarah J. Maas',
          series: 'Throne of Glass #3',
          description: 'Celaena has survived deadly contests and shattering heartbreak-but at an unspeakable cost. Now, she must travel to a new land to confront her darkest truth . . . a truth about her heritage that could change her life-and her future-forever. Meanwhile, brutal and monstrous forces are gathering on the horizon, intent on enslaving her world. Will Celaena find the strength to not only fight her inner demons, but to take on the evil that is about to be unleashed?',
          rate: '4.44/5',
          genre: 'Novel, Fantasy Fiction',
          shelfNo: 0
        },
        {
          id: 47,
          title: 'Queen of Shadows',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/51+lVy0eOwL._SX315_BO1,204,203,200_.jpg',
          author: 'Sarah J. Maas',
          series: 'Throne of Glass #4',
          description: 'Everyone Celaena Sardothien loves has been taken from her. But she’s at last returned to the empire—for vengeance, to rescue her once-glorious kingdom, and to confront the shadows of her past…\n\nShe has embraced her identity as Aelin Galathynius, Queen of Terrasen. But before she can reclaim her throne, she must fight.',
          rate: '4.53/5',
          genre: 'Fantasy Fiction',
          shelfNo: 0
        },
        {
          id: 48,
          title: 'Empire of Storms',
          cover: 'https://www.booktopia.com.au/blog/wp-content/uploads/2016/05/empire-of-storms.jpg',
          author: 'Sarah J. Maas',
          series: 'Throne of Glass #5',
          description: "The long path to the throne has only just begun for Aelin Galathynius as war looms on the horizon. Loyalties have been broken and bought, friends have been lost and gained, and those who possess magic find themselves at odds with those who don't.\n\nWith her heart sworn to the warrior-prince by her side, and her fealty pledged to the people she is determined to save, Aelin will delve into the depths of her power to protect those she loves. But as monsters emerge from the horrors of the past, and dark forces become poised to claim her world, the only chance for salvation will lie in a desperate quest that may mark the end of everything Aelin holds dear.",
          rate: '4.52/5',
          genre: 'Novel, Fantasy Fiction',
          shelfNo: 0
        },
        {
          id: 49,
          title: 'Tower of Dawn',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/91pmqiTzBhL.jpg',
          author: 'Sarah J. Maas',
          series: 'Throne of Glass #6',
          description: "Chaol Westfall and Nesryn Faliq have arrived in the shining city of Antica to forge an alliance with the Khagan of the Southern Continent, whose vast armies are Erilea's last hope. But they have also come to Antica for another purpose: to seek healing at the famed Torre Cesme for the wounds Chaol received in Rifthold.\n\nAfter enduring unspeakable horrors as a child, Yrene Towers has no desire to help the young lord from Adarlan, let alone heal him. Yet she has sworn an oath to assist those in need—and will honor it. But Lord Westfall carries shadows from his own past, and Yrene soon comes to realize they could engulf them both.",
          rate: '4.30/5',
          genre: 'Fantasy Fiction',
          shelfNo: 0
        },
        {
          id: 50,
          title: 'Kingdom of Ash',
          cover: 'https://diwanegypt.com/wp-content/uploads/2020/08/9781408872918.jpg',
          author: 'Sarah J. Maas',
          series: 'Throne of Glass #7',
          description: 'Aelin Galathynius has vowed to save her people ― but at a tremendous cost. Locked within an iron coffin by the Queen of the Fae, Aelin must draw upon her fiery will as she endures months of torture. The knowledge that yielding to Maeve will doom those she loves keeps her from breaking, but her resolve is unraveling with each passing day…',
          rate: '4.56/5',
          genre: 'Fantasy Fiction',
          shelfNo: 0
        },
        {
          id: 51,
          title: 'A Court of Thorns and Roses',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/81Z-yHX8OcL.jpg',
          author: 'Sarah J. Maas',
          series: 'A Court of Thorns and Roses #1',
          description: "Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold, bleak place in the long winter months. So when she spots a deer in the forest being pursued by a wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and killing something so precious comes at a price ...\n\nDragged to a magical kingdom for the murder of a faerie, Feyre discovers that her captor, his face obscured by a jewelled mask, is hiding far more than his piercing green eyes would suggest. Feyre's presence at the court is closely guarded, and as she begins to learn why, her feelings for him turn from hostility to passion and the faerie lands become an even more dangerous place. Feyre must fight to break an ancient curse, or she will lose him forever.",
          rate: '4.18/5',
          genre: 'Novel, Fantasy Fiction, High fantasy',
          shelfNo: 3
        },
        {
          id: 52,
          title: 'A Court of Mist and Fury',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/812Iu6GMZSL.jpg',
          author: 'Sarah J. Maas',
          series: 'A Court of Thorns and Roses #2',
          description: "Feyre survived Amarantha's clutches to return to the Spring Court—but at a steep cost. Though she now has the powers of the High Fae, her heart remains human, and it can't forget the terrible deeds she performed to save Tamlin's people.\n\nNor has Feyre forgotten her bargain with Rhysand, High Lord of the feared Night Court. As Feyre navigates its dark web of politics, passion, and dazzling power, a greater evil looms—and she might be key to stopping it. But only if she can harness her harrowing gifts, heal her fractured soul, and decide how she wishes to shape her future—and the future of a world cleaved in two.",
          rate: '4.58/5',
          genre: 'Novel, Fantasy Fiction, High fantasy',
          shelfNo: 3
        },
        {
          id: 53,
          title: 'A Court of Wings and Ruin',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/910P-B9K+ZL.jpg',
          author: 'Sarah J. Maas',
          series: 'A Court of Thorns and Roses #3',
          description: 'FEYRE WILL BRING VENGEANCE.\n\nShe has left the Night Court - and her High Lord - and is playing a deadly game of deceit. In the Spring Court, Tamlin is making deals with the invading king threatening to bring Prythian to its knees, and Feyre is determined to uncover his plans. But to do so she must weave a web of lies, and one slip may spell doom not only for Feyre, but for her world as well.',
          rate: '4.41/5',
          genre: 'Fantasy Fiction',
          shelfNo: 3
        },
        {
          id: 54,
          title: 'Verity',
          cover: 'https://m.media-amazon.com/images/I/911BI3unxzL.jpg',
          author: 'Colleen Hoover',
          description: "Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish.\n\nLowen arrives at the Crawford home, ready to sort through years of Verity's notes and outlines, hoping to find enough material to get her started. What Lowen doesn't expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read. Page after page of bone-chilling admissions, including Verity's recollection of what really happened the day her daughter died.",
          rate: '4.36/5',
          genre: 'Novel, Thriller, Romance novel, Fiction, Suspense',
          shelfNo: 3
        },
        {
          id: 55,
          title: 'The One',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/910Fl5yk-ZL.jpg',
          author: 'John Marrs',
          description: 'A simple DNA test is all it takes. Just a quick mouth swab and soon you’ll be matched with your perfect partner the one you are genetically made for.',
          rate: '4.13/5',
          genre: 'Thriller, Science fiction, Suspense, Psychological Fiction, Dystopian Fiction',
          shelfNo: 3
        },
        {
          id: 56,
          title: 'Behind Closed Doors',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/51CVFIlxP4L._SX331_BO1,204,203,200_.jpg',
          author: 'B.A. Paris',
          description: 'Everyone knows a couple like Jack and Grace. He has looks and wealth; she has charm and elegance. He’s a dedicated attorney who has never lost a case; she is a flawless homemaker, a masterful gardener and cook, and dotes on her disabled younger sister. Though they are still newlyweds, they seem to have it all. You might not want to like them, but you do. You’re hopelessly charmed by the ease and comfort of their home, by the graciousness of the dinner parties they throw. You’d like to get to know Grace better.\n\nBut it’s difficult, because you realize Jack and Grace are inseparable.\n\nSome might call this true love. Others might wonder why Grace never answers the phone. Or why she can never meet for coffee, even though she doesn’t work. How she can cook such elaborate meals but remain so slim. Or why she never seems to take anything with her when she leaves the house, not even a pen. Or why there are such high-security metal shutters on all the downstairs windows.\n\nSome might wonder what’s really going on once the dinner party is over, and the front door has closed.',
          rate: '3.96/5',
          genre: 'Thriller, Suspense, Psychological Fiction',
          shelfNo: 3
        },
        {
          id: 57,
          title: 'Home Before Dark',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571683410l/50833559._SX0_SY0_.jpg',
          author: 'Riley Sager',
          description: 'What was it like? Living in that house.\n\nMaggie Holt is used to such questions. Twenty-five years ago, she and her parents, Ewan and Jess, moved into Baneberry Hall, a rambling Victorian estate in the Vermont woods. They spent three weeks there before fleeing in the dead of night, an ordeal Ewan later recounted in a nonfiction book called House of Horrors. His tale of ghostly happenings and encounters with malevolent spirits became a worldwide phenomenon, rivaling The Amityville Horror in popularity—and skepticism.\n\nToday, Maggie is a restorer of old homes and too young to remember any of the events mentioned in her father’s book. But she also doesn’t believe a word of it. Ghosts, after all, don’t exist. When Maggie inherits Baneberry Hall after her father’s death, she returns to renovate the place to prepare it for sale. But her homecoming is anything but warm. People from the past, chronicled in House of Horrors, lurk in the shadows. And locals aren’t thrilled that their small town has been made infamous thanks to Maggie’s father. Even more unnerving is Baneberry Hall itself—a place filled with relics from another era that hint at a history of dark deeds. As Maggie experiences strange occurrences straight out of her father’s book, she starts to believe that what he wrote was more fact than fiction.',
          rate: '4.09/5',
          genre: 'Thriller, Mystery, Suspense, Horror fiction, Psychological thriller, Psychological Fiction',
          shelfNo: 3
        },
        {
          id: 58,
          title: 'The Love Hypothesis',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611937942l/56732449.jpg',
          author: 'Ali Hazelwood',
          description: "As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships--but her best friend does, and that's what got her into this situation. Convincing Anh that Olive is dating and well on her way to a happily ever after was always going to take more than hand-wavy Jedi mind tricks: Scientists require proof. So, like any self-respecting biologist, Olive panics and kisses the first man she sees.\n\nThat man is none other than Adam Carlsen, a young hotshot professor--and well-known ass. Which is why Olive is positively floored when Stanford's reigning lab tyrant agrees to keep her charade a secret and be her fake boyfriend. But when a big science conference goes haywire, putting Olive's career on the Bunsen burner, Adam surprises her again with his unyielding support and even more unyielding...six-pack abs.\n\nSuddenly their little experiment feels dangerously close to combustion. And Olive discovers that the only thing more complicated than a hypothesis on love is putting her own heart under the microscope.",
          rate: '4.47/5',
          genre: 'Romance novel, Contemporary romance, Erotic literature, New adult fiction, Science fiction comedy, Medical romance',
          shelfNo: 0
        },
        {
          id: 59,
          title: 'So We Meet Again',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/51G0dWDir-S._SX330_BO1,204,203,200_.jpg',
          author: 'Suzanne Park',
          description: 'When investment banker Jessie Kim is laid off in a virtual meeting and then overhears why (“she’s already being overpaid anyway for a woman” and “Asians are worker bees, not someone who can drum up new deals”) she delivers an “eff you guys” speech and storms out.\n\nAfter moving back home to Tennessee to live with her loving but meddling mother and father, she runs into her childhood nemesis - golden child Daniel Choi - at the local Asian grocery store. The smart, charming lawyer appears to have it all...while Jessie has nothing.\n\nJess begrudgingly accepts Daniel’s help to relaunch her long abandoned Korean cooking YouTube channel Hanguk Hacks, showcasing easy meal prep for busy professionals. But just as she discovers Daniel’s life isn’t as perfect as it seems and there’s more to him than meets the eye, he shows up for a life-changing business opportunity, and their rivalry is back on....',
          rate: '3.61/5',
          genre: 'Fiction, Romance novel, Humour',
          shelfNo: 0
        },
      ],  
}

const rootReducer = (state = initialState, action) => {
    console.log("state: ", state, "action: ", action);
    switch(action.type){
        case CHANGE_SHELF: 
            return {
                books: state.books.map(book => book.id === action.id ? {...book, shelfNo: parseInt(action.shelfNo)} : book)
            }
        case SHOW_ALL:
            return {
                books: state.books
            }   
        default: 
            return state;
    }
}

export default rootReducer;