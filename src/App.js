import Books from './Pages/Books';
import Browse from './Pages/Browse';
import Profile from './Pages/Profile';
import BookDetails from "./Pages/BookDetails";
import NotFound from './Pages/NotFound';

import { Route, Switch } from "react-router-dom";
import {connect} from 'react-redux';

//const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:Fantasy|Fiction|"Young+Adult"&langRestrict="en"&printType=books&maxResults=40';
// const API_KEY = 'AIzaSyBEziGb1_VgUb40UJJ-JwMO8FrgQohaV0A'; 

//shelfNo: 0-> none 1-> currently 2-> want to read 3-> read
/*const books = [
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
    shelfNo: 1
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
    shelfNo: 0
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
    shelfNo: 0
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
    shelfNo: 3
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
    shelfNo: 0
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
    //shelfNo: 3
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
  }
];*/

const mapStateToProps = state => {
  return {
      books: state.books
  }
}

function App(props) {
  
  const books = props.books;
  console.log("App books props: ", books);

  return (

    <Switch>
      <Route exact path="/" component={Profile} />
      <Route path="/books" render={(props) => <Books {...props} books={books} />} />
      <Route path="/browse" render={(props) => <Browse {...props} books={books} />} />
      <Route path="/book/:id" render={(props) => <BookDetails {...props} books={books} />} />
      <Route component={NotFound} />
    </Switch>
  );}
//}

export default connect(mapStateToProps)(App);
