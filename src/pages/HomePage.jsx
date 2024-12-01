import { AboutUsSection, AppPromo, Deals, Header, Hero, PartnerSection, PopularCategories, PopularRestaurants, StatsSection ,Footer} from '../components/index.component'


const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Deals />
            <PopularCategories />
            <PopularRestaurants />
            <AppPromo />
            <PartnerSection />
            <AboutUsSection />
            <StatsSection />
            <Footer/>
        </>
    )
}

export default HomePage