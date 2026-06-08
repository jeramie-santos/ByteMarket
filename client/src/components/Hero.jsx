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
    <section className="flex-1 flex flex-col-reverse p-4 gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-4xl text-(--color-primary) font-bold ">{heroData.tagline}</span>
          <h1 className="text-2xl text-(--color-secondary) font-semibold">{heroData.title}</h1>
          <p className="text-(--color-text-muted)">{heroData.subtitle}</p>
          <div className="flex gap-4">
            <button className="bg-(--color-primary) text-(--color-on-primary) py-1 px-2 rounded-md font-semibold">{heroData.primaryButtonText}</button>
            <button className="bg-(--color-primary) text-(--color-on-primary) py-1 px-2 rounded-md font-semibold">{heroData.secondaryButtonText}</button>
          </div>
        </div>
        <div>
          <img src={heroData.imageUrl} alt={heroData.title} />
        </div>
    </section>
  )
}

export default Hero
