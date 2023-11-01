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

export const logos = {
    Reservation: require('./assets/bus-icon.png'),
    Banner: require('./assets/banner-logo.png'),
    Avatar: require('./assets/avatar.png'),
    ReturnButton: require('./assets/return-button-icon.png'),
    Slider1: require('./assets/images/bus1.jpg'),
    Slider2: require('./assets/images/bus2.jpg'),
    Slider3: require('./assets/images/bus3.jpg'),
}

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
    passengersApi: "/api/v1/passengers",
    searchTripsApi: (cityOriginKey, cityDestinationKey, dateFrom) => {
        return `/api/v1/trips/search?handled=true&skipped=true&tag=string&bodyText=string&lineNumber=0&subModels=string&unhandled=true&cityOriginKey=${cityOriginKey}&cityDestinationKey=${cityDestinationKey}&dateFrom=${dateFrom}`;                                                                                                       
    },
    todaysTripsApi: (date) => {
        return `/api/v1/trips/date?handled=true&skipped=true&tag=string&bodyText=string&lineNumber=0&subModels=string&unhandled=true&dateNow=${date}`;
    },
};

export const screens = {
    Reservation: "ReservationScreen",
    ReservationList: "ReservationListScreen",
    Profile: "ProfileScreen",
    Login: "LoginScreen",
    Register: "RegisterScreen",
    Home: "HomeScreen",
    Search: "SearchScreen",
    Company: "CompaniesScreen",
    Location: "LocationsScreen",
    BookingDetails: "BookingDetailsScreen",
    BookingDtls: "BookingDetails",
    EditInformation: "EditInformationScreen",
    LoadingView: "LoadingViewScreen",
    Settings: "SettingsScreen",
    SortAndFilter: "SortAndFilter",
    SortFilter: "SortFilterView",
    TodaysTrip: "TodaysTripScreen",
    SearchList: "SearchListScreen",
    Tab: "TabScreen",
}

export const formats = {
    date: "YYYY-MM-DD",
    time: "HH:mm",
    dateTime: "YYYY-MM-DD HH:mm",
    dateTimeWithSeconds: "YYYY-MM-DDTHH:mm:ss",
}

export const placeholders = {
    email : "Email",
    username : "Username",
    password : "Password",
    repeatPassword : "Repeat Password",
    telephone : "Telephone",
    whiteTextColor: "white",
}

export const titles = {
    save : "Save",
    signUp : "Sign Up",
    signIn : "Sign In",
    Company : "Companies",
    Location : "Locations",
    Back : "Back",
    Config: "Config",
    continue: "Continue",
    oneWay: "One Way",
    roundTrip: "Round Trip",
}

export const errorMessages = {
    email : "Invalid email",
    username : "Invalid username",
    password : "Invalid password",
    repeatPassword : "Passwords do not match",
    telephone : "Invalid telephone",
    edit : "Edit failed",
    userData : "userData is null",
    searchTrip: 'Error searching for trips:',
    timeUndefined: 'Error: time is not defined',
    priceUndefined: 'Error: price is not defined',
}

export const keywords = {
    time : "time",
    hours : "hs",
    minutes : "min",
    seconds : "sec",
    hoursLong : "hours",
    minutesLong : "minutes",
    secondsLong : "seconds",
    empty: "Empty",
    firstTime: "00:01",
    secondTime: "23:59",
    firstTimeMsg: "firstTime",
    secondTimeMsg: "secondTime",
    firstPriceMsg: "firstPrice",
    secondPriceMsg: "secondPrice",
    keyboardType: "numeric",
    uncheckAllMsg: "Uncheck All",
    checkAllMsg: "Check All",
    oneWayType: "One Way",
    roundTripType: "Round Trip",
}

export const osTypes = {
    android: "android",
    ios: "ios",
}

export const colorCode = {
    filterContainer: "#4630EB",
    tripContainer: "#007AFF",
    
}