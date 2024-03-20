import { useState } from 'react'
import './Testimonials.css'

function App() {
  const [currIdx, setCurrIdx] = useState(0)

  const [createReview, setCreateReview] = useState([
    {
      title:"",
      author :"",
    }
  ])

  const [Testimonials_collection, setTestimonials_collection]=useState([
    {
      title:"Its Very Good",
      author :"Amit Pandey",
    },
    {
      title:"Must Try Very Good",
      author :"Luffy",
    },
    {
      title:"Aacha Hai Ji",
      author :"Zoro",
    },
  ])

  function HandlePrevNav(){
    if( currIdx === 0 ){
      setCurrIdx(()=> Testimonials_collection.length-1)
    }else{
      setCurrIdx( ()=> currIdx - 1
      )
    }
  }

  function HandleNextNav(){
    if( currIdx === Testimonials_collection.length-1){
      setCurrIdx(()=> 0)
    }else{

      setCurrIdx( ()=> currIdx +1
      )
    }
  }

  function HandleTestimonialCreation(e) {
    const { name, value } = e.target;
    setCreateReview(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function AddNewReview(event){
    event.preventDefault()

    const newReview = {
      title: createReview.title,
      author: createReview.author
    };
    
    setTestimonials_collection([...Testimonials_collection, newReview]);
    setCreateReview({
      title: "",
      author: ""
    });
  }


  return (

    <div className='main_container'>
      <div className="testimonial_container">
          <div className="testimonial_title">
              {Testimonials_collection[currIdx]["title"]}
          </div>
          <div className="testimonial_author">
             - {Testimonials_collection[currIdx]["author"]}
          </div>
          <div className="testimonial_navigation">
              <div onClick={()=>HandlePrevNav()}>Prev</div>
              <div onClick={()=>HandleNextNav()} >Next</div>
          </div>
      </div>

      <div className='create_testimonial'>
        <form onSubmit={AddNewReview}>
            <input type="text" placeholder='Review' name='title' value={createReview["title"]} onChange={HandleTestimonialCreation} required />
            <input type="text" placeholder='Author' name='author' value={createReview["author"]} onChange={HandleTestimonialCreation} required />
            <input type="submit" placeholder='Write' />
        </form>
      </div>
      
    </div>
  )
}

export default App
