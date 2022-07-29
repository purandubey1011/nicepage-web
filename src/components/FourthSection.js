import React from 'react'

const FourthSection = () => {
    return (
        <>
       
        <section className='mt-32 flex flex-col w-4/5 m-auto' >
            {/* up start  */}
            <div className='flex relative '>
                <div>
                <div className='max-w-xl -ml-8 right-0 pl-12 text-lg tracking-tight'>Battery life is one of the biggest issues with true wireless earbuds. Most first-gen true wireless earbuds barely cracked the three-hour barrier per charge (if that), while the AirPods helped push the baseline to a still-mediocre five hours. It’s not easy to cram a long-lasting battery into a small pair of earbuds which require a constant electronic connection to your smartphone.</div>
                <div className='w-32 h-4 flex ml-4 mt-4 bg-stone-700'></div>
                </div>

                <div className='flex flex-col items-end pl-48'>
                <div className=' font-bold text-5xl tracking-normal leading-tight whitespace-nowrap'>Be The Best At </div>
                <div className=' font-bold text-5xl tracking-normal leading-tight '>Battery Life</div>
                </div>
               
                
                </div>
            {/* up end */}

            <div className='w-52 h-52 bg-slate-300 flex self-center absolute mt-48 opacity-20'></div>
            
            {/* bottom start */}
            <div className='mt-24 flex relative'>

                
                 <div className=''><img src="https://images01.nicepage.com/cb/7b/cb7bb7fb7cae7f46ebac9c192d4557a2.png" alt="" /></div>

                <div className='space-y-5 w-3/4 flex justify-center flex-col'>
                   
                    <p className=' tracking-wide leading-tight text-right max-w-lg pl-6 ml-12'>Google’s original Pixel Buds battery just matched the AirPods — even though the PBs weren’t fully wireless — and that’s just not good enough. You can bet Apple’s AirPods 2 will offer at least a modest boost in battery life, and if Google wants to make any waves, the Pixel Buds 2 need to go even further.</p>

                    <button className='outline-2 outline px-7 py-2 outline-slate-800 self-end text-slate-800 font-semibold text-sm'>READ MORE</button>
                </div>


            </div>
            {/* bottom end */}

            </section>
    </>
  )
}

export default FourthSection