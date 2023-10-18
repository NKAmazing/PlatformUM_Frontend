export const categoriesData = [
    {
        title: 'Location',
        image: require('./assets/images/location.png')
    },
    {
        title: "Today's Trip!",
        image: require('./assets/images/bus.png')
    },
    {
        title: 'Companies',
        image: require('./assets/images/company.png')
    }
]

export const cityImages = {
    SanRafael: require('./assets/images/sanrafael.png'),
    Malargue: require('./assets/images/malargue.png'),
    Capital: require('./assets/images/capital.jpg'),
    GeneralAlvear: require('./assets/images/alvear.jpg'),
};

export const companiesImages = {
    Andesmar: require('./assets/images/andesmar.png'),
    Buttini: require('./assets/images/buttini.jpg'),
    ElRapido: require('./assets/images/elrapido.jpg'),
    Chevallier: require('./assets/images/chevalier.jpg'),
    FlechaBus: require('./assets/images/flechabus.jpg'),
    ElCondor: require('./assets/images/elcondor.jpg'),
}

export const urls = {
    citiesApi: "/api/v1/cities",
    companiesApi: "/api/v1/companies",
    loginApi: "/auth/login",
    registerApi: "/auth/register",
    userApi: "/api/v1/users",
    tokenApi: "/token/verify",
    reservationApi: "/api/v1/reservations",
    searchTripsApi: (cityOriginKey, cityDestinationKey, dateFrom) => {
        return `/api/v1/trips/search?handled=true&skipped=true&tag=string&bodyText=string&lineNumber=0&subModels=string&unhandled=true&cityOriginKey=${cityOriginKey}&cityDestinationKey=${cityDestinationKey}&dateFrom=${dateFrom}`;                                                                                                       
    }
}