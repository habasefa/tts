import React from 'react'
import Header from '../components/historyComponents/header'
import Body from '../components/historyComponents/body'
import Footer from '../components/historyComponents/footer'
const report = () => {
  return (
    <div className="min-h-screen px-20 font-minionPro xl:px-24">
      <Header />
      {/* <div className='flex justify-end mt-14 mb-10'>
          <div className='md:mr-36'>
            <h1 className='text-[#1a3765] text-4xl'>History of Education</h1>
            <p className='text-[#1a3765] text-2xl'>Practical lesson on classic tutorials</p>
          </div>
        </div> */}
      {/* <Body /> */}

      <form>
        <div className="text-center lg:text-left">
          <div className="flex flex-col">
            <div className="p-3">
              <label
                className="text-2xl font-semibold tracking-wide"
                htmlFor="phoneN"
              >
                Total Number of Tutee
              </label>
              <br />
              <input
                className="mt-4 w-1/5 rounded-sm"
                type="number"
                id="phoneN"
                placeholder="How many tutees do you have?"
                // value={formData.name} // Uncomment and update if you're managing state
              />
            </div>
            <div className="p-3">
              <label
                className="mt-3 text-2xl font-semibold tracking-wide"
                htmlFor="phoneN"
              >
                Name of Tutee
              </label>
              <br></br>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Tutee Name"
                // value={formData.name}
              />
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="flex flex-row">
            <div className="col">
              <div className="text-2xl font-semibold" htmlFor="phoneN">
                Total Hours
              </div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Month"
                // value={formData.name}
              />
            </div>
            <div className="col">
              <div className="text-2xl font-semibold" htmlFor="phoneN">
                Total Days
              </div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Month"
                // value={formData.name}
              />
            </div>

            <div className="col">
              <div className="text-2xl font-semibold" htmlFor="phoneN">
                Total Weeks
              </div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Month"
                // value={formData.name}
              />
            </div>
            <div className="col">
              <div className="text-2xl font-semibold" htmlFor="phoneN">
                Total Months
              </div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Month"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-md bg-[#f2f2f2] px-3 py-2 ">
          <label
            className="text-2xl font-semibold tracking-wide"
            htmlFor="phoneN"
          >
            On the Content
          </label>

          <div className="flex flex-row">
            <div className="col basis-1/4">
              <div> Subject</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Subject"
              />
            </div>
            <div className="col basis-1/4">
              <div> Chapter</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Chapter"
              />
            </div>
            <div className="col basis-1/4">
              <div> Topic</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Chapter"
                // value={formData.name}
              />
            </div>
            <div className="col basis-1/4">
              <div className="justify-center">Understanding</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Chapter"
                // value={formData.name}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-md bg-[#f2f2f2] px-3 py-2">
          <label
            className="text-2xl font-semibold tracking-wide"
            htmlFor="phoneN"
          >
            On Result
          </label>

          <div className="flex flex-row">
            <div className="col basis-1/4">
              <div> Subject</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Subject"
                // value={formData.name}
              />
            </div>
            <div className="col basis-1/4">
              <div> Units</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Chapter"
                // value={formData.name}
              />
            </div>
            <div className="col basis-1/4">
              <div> Type</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Chapter"
                // value={formData.name}
              />
            </div>
            <div className="col basis-1/4">
              <div className="justify-center">Result</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Chapter"
                // value={formData.name}
              />
            </div>
          </div>
        </div>
        <div className="mt-2 rounded-md bg-[#f2f2f2] px-3 py-2 ">
          <label
            className="text-2xl font-semibold tracking-wide"
            htmlFor="phoneN"
          >
            On the Tutorial Delivery
          </label>

          <div className="flex flex-row">
            <div className="col basis-1/2">
              <div> 1.How Did the tutoring go?</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Subject"
                // value={formData.name}
              />

              <div> 2.Was there any challenge?</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Chapter"
                // value={formData.name}
              />
            </div>

            <div className="col basis-1/2">
              <div> 3.What are you going to the challenge?</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Chapter"
                // value={formData.name}
              />
              <div className="justify-center">
                4.How can we help you with the challenge?
              </div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Chapter"
                // value={formData.name}
              />
            </div>
          </div>
        </div>
        <div className="mt-2 rounded-md bg-[#f2f2f2] px-3 py-2 ">
          <label
            className="text-2xl font-semibold tracking-wide"
            htmlFor="phoneN"
          >
            On Professionality
          </label>

          <div className="flex flex-row">
            <div className="col basis-1/2">
              <div> Dressing</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Subject"
                // value={formData.name}
              />

              <div> Grooming</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Chapter"
                // value={formData.name}
              />
              <div> Hygiene</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Chapter"
                // value={formData.name}
              />
            </div>

            <div className="col basis-1/2">
              <div className="justify-center">Punctuality</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Chapter"
                // value={formData.name}
              />
              <div className="justify-center">Manner</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Chapter"
                // value={formData.name}
              />
              <div className="justify-center">Eloquence</div>
              <input
                className="mx-1"
                type="text"
                id="name"
                placeholder="Chapter"
                // value={formData.name}
              />
            </div>
          </div>
        </div>{' '}
        <button
          class="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="button"
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  )
}
export default report
