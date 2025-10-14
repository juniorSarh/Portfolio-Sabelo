import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default function Contact() {
  return (
    <div>
      <Navbar/>
              <div style={{height:'650px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div style={{ maxWidth: 600, width: '90%', textAlign: 'center' }}>
                  <h1>Contact</h1>
                  <p>I'm open to opportunities and collaborations. Connect with me or grab my CV below.</p>
                  <div style={{ display:'flex', gap: '16px', justifyContent:'center', marginTop: '16px' }}>
                    <a
                      href="https://www.linkedin.com/in/sabelogumede/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ padding:'10px 16px', border:'1px solid #1f6feb', borderRadius: 6, textDecoration:'none' }}
                      aria-label="Visit my LinkedIn profile"
                    >
                      LinkedIn Profile
                    </a>
                    <a
                      href="/Sabelo_Gumede_CV.pdf"
                      download
                      style={{ padding:'10px 16px', border:'1px solid #1f6feb', borderRadius: 6, textDecoration:'none' }}
                      aria-label="Download my CV as PDF"
                    >
                      Download CV (PDF)
                    </a>
                  </div>
                </div>
              </div>
              <Footer/>
    </div>
  )
}
