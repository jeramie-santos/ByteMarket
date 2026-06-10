const Hero = () => {

  const heroData = {
    "title": "Next-Gen Performance Starts Here",
    "subtitle": "Don't just upgrade rebuild. Equip your workflow with lightning-fast components, ultra-wide monitors, and high-efficiency peripherals designed to push boundaries.",
    "primaryButtonText": "Shop Hardware",
    "secondaryButtonText": "Build Your Rig",
    "imageUrl": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7", // Modern clean desktop workspace
    "tagline": "PERFORMANCE GEAR"
  };

  return (
    <section className="min-h-[80vh] flex-1 flex flex-col-reverse p-4 gap-8 items-center justify-center md:flex-row self-center lg:gap-20">
        
        <div className="flex flex-col gap-6 justify-center">
          <span className="text-sm font-bold tracking-widest text-(--color-primary) lg:text-base">{heroData.tagline}</span>
          
          <div className="flex flex-col gap-2 lg:gap-3">
            <h1 className="text-4xl text-(--color-secondary) font-extrabold lg:text-6xl">{heroData.title}</h1>
            <p className="text-base text-(--color-text-muted) leading-relaxed lg:text-lg">{heroData.subtitle}</p>
          </div>
        </div>
        
        <div className="w-full flex justify-center">
              <img src={heroData.imageUrl} alt={heroData.title} 
                className="w-full aspect-square object-cover rounded-3xl border border-white/10 shadow-2xl shadow-black/10 hover:scale-[1.01] transition-duration-500"
              />
        </div>
    </section>
  )
}

export default Hero
