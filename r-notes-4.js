/* ***********************************************************************************************
Course Title: React Front to back 2022
Author: Traversy Media
Description: Project 4, house listing app that integrates with Firebase
*************************************************************************************************/

// Firebase: great PAAS to use for many different mobile and web apps, great free tier, we get databases, authentication, file storage, hosting, etc
// followed gist to set up project and firebase at https://gist.github.com/bradtraversy/caab8ebd8ff4b6e947632887e0183761
// firestore database rules are in CEL language
// made dummy document entry in collection to work with, got free stock photos from unsplash
//documentation is pretty good

//firebase v.6 implements getAuth() by storing document in IndexedDB.  V.5 used to store inside local Storage


//implemented React-Toastify for custom alerts
npm i react-toastify

//private routes
// implemented private route for profile page with 
<Route path="/profile" element={<PrivateRoute />}>
    <Route path="/profile" element={<Profile />} />
</Route>
//instead of
<Private Route path="/profile" element={<Profile />} />
// because of changes in v.6


//implemented Leaflet for mobile-friendly interactive map
npm i leaflet react-leaflet

//used Swiper React Components to implement slideshow, installed v.6.8.1 because there are issues with v.7 at this time, but may be fixed
npm i swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Spinner from './Spinner'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

//deployed to Vercel
//Google Auth wasn't working, so we had to add New domain with domain name and then it worked