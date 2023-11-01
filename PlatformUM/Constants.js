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
    AppLogo: require('./assets/images/logo.png'),
    Reservation: require('./assets/bus-icon.png'),
    Banner: require('./assets/banner-logo.png'),
    Avatar: require('./assets/avatar.png'),
    ReturnButton: require('./assets/return-button-icon.png'),
    Slider1: require('./assets/images/bus1.jpg'),
    Slider2: require('./assets/images/bus2.jpg'),
    Slider3: require('./assets/images/bus3.jpg'),
    EditIcon: require('./assets/edit-icon.png'),
    MailIcon: require('./assets/mail-icon.png'),
    PasswordIcon: require('./assets/password-icon.png'),
    PhoneIcon: require('./assets/phone-icon.png'),
    LogOutIcon: require('./assets/logout-icon.png'),
    AvatarIcon: require('./assets/avatar-icon.png'),
    PassengerIcon: require('./assets/passenger-icon.png'), 
    NidIcon: require('./assets/nid-icon.png'),
    BirthdayIcon: require('./assets/birthday-icon.png'),
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

export const reservationStatus = {
    pending: "PENDING",
    cancelled: "CANCELLED",
    confirmed: "CONFIRMED",
}

export const placeholders = {
    email : "Email",
    username : "Username",
    password : "Password",
    repeatPassword : "Repeat Password",
    telephone : "Telephone",
    search : "Search for a trip!",
    whiteTextColor: "white",
    grayTextColor: "gray",
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
    Reservation: "Reservation ",
    close: "Close",
    contactDetails: "Contact Details",
}

export const errorMessages = {
    email : "Invalid email",
    username : "Invalid username",
    password : "Invalid password",
    repeatPassword : "Passwords do not match",
    telephone : "Invalid telephone",
    edit : "Edit failed",
    userData : "userData is null",
    searchTrip: "Error searching for trips:",
    timeUndefined: "Error: time is not defined",
    priceUndefined: "Error: price is not defined",
    login : "Login failed",
    register : "Register failed",
    logout: "Error during logout: ",
    usernameExists: "Username already exists",
    passwordIncorrect: "Password is incorrect",
    passwordNotMatch: "Password and Repeat Password are not the same",
    emptyUsername: "Username is empty",
    emptyPassword: "Password is empty",
    request : "Request error: ",
    fetch : "Error fetching data: ",
    status : "Error response status: ",
    headers : "Error response headers: ",
    data : "Error response data: ",
}

export const warningMessages = {
    noScreen: "No screen found corresponding to the category ",
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
    jwt : "jwtToken",
}

export const testMessages = {
    appBackground : "AppBackgroundComponent renders correctly",
    returnButton : "ReturnButtonComponent renders correctly",
    slider : "Slider component renders correctly",
}

export const osTypes = {
    android: "android",
    ios: "ios",
}

export const colorCode = {
    filterContainer: "#4630EB",
    tripContainer: "#007AFF",
    searchContainer: "gray",

}

export const buttonTexts = {
    Register: "Register",
    Login: "Login",
}