import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
    
    const [isDarkMode, setIsDarkMode] = useState(false);
const navigate = useNavigate();
    const handlenavigate = ()=>{
        const id = 
        navigate("/lobby")

    }
  return (
    <div className={`flex flex-col min-h-[100dvh] ${isDarkMode ? "bg-slate-950 text-white" : ""}`}>

<header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center" >
        <span className='w-6 h-6'>Icon</span>
          <span className="sr-only">Web-rtc</span>
        </Link>
        <button  onClick={() => setIsDarkMode(!isDarkMode)} className="ml-auto">
          {isDarkMode ? <span className=' w-4 h-4'>Sun</span> : <span className='w-4 h-4'>Moon</span>}
        </button>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary dark:bg-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground dark:text-primary sm:text-5xl xl:text-6xl/none">
                    Revolutionize Your Business with Our Platform
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 dark:text-primary-foreground md:text-xl">
                    Our cutting-edge platform empowers you to streamline your operations, boost productivity, and drive
                    growth like never before.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <button  onClick={handlenavigate}
                         className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
            
                    Join a Meeting
                

                    </button>
               
                </div>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHn5HJ1V5Jb2WbbVF5iri6EdbiTfU7uyqja_U7d_8sgfSXX_iqFp-4ZJ_iUQiBB7Urq0s&usqp=CAU"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-muted-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm dark:bg-muted-foreground dark:text-muted">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-muted-foreground dark:text-muted sm:text-5xl">
                  Unlock Your Business Potential
                </h2>
                <p className="max-w-[900px] text-muted-foreground/80 dark:text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a comprehensive suite of tools and features to help you streamline your
                  operations, boost productivity, and drive growth.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary p-2 text-primary-foreground dark:bg-primary-foreground dark:text-primary">
                     <span className='w-6 h-6'>Icon</span>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-muted-foreground dark:text-muted">
                        Seamless Collaboration
                      </h3>
                      <p className="text-muted-foreground/80 dark:text-muted">
                        Empower your team to work together effortlessly with our built-in collaboration tools.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary p-2 text-primary-foreground dark:bg-primary-foreground dark:text-primary">
                    <span className='w-6 h-6'>Icon</span>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-muted-foreground dark:text-muted">Automated Workflows</h3>
                      <p className="text-muted-foreground/80 dark:text-muted">
                        Streamline your processes with our powerful automation tools, saving you time and effort.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary p-2 text-primary-foreground dark:bg-primary-foreground dark:text-primary">
                    <span className='w-6 h-6'>Icon</span>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-muted-foreground dark:text-muted">
                        Scalable Infrastructure
                      </h3>
                      <p className="text-muted-foreground/80 dark:text-muted">
                        Easily scale your business with our robust and flexible infrastructure.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHn5HJ1V5Jb2WbbVF5iri6EdbiTfU7uyqja_U7d_8sgfSXX_iqFp-4ZJ_iUQiBB7Urq0s&usqp=CAU"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-muted-foreground">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter text-muted-foreground dark:text-muted md:text-4xl/tight">
                Join the Revolution
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground/80 dark:text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up now to experience the power of our platform and transform your business.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <button type="submit">Sign Up</button>
              </form>
              <p className="text-xs text-muted-foreground/80 dark:text-muted">
                By signing up, you agree to our{" "}
                <button  className="underline underline-offset-2" >
                  Terms &amp; Conditions
                </button>
              </p>
            </div>
          </div>
        </section>
      </main>
  </div>
  )
}

export default Homepage