import {lazy, Suspense, useEffect} from "react"

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Loading from "./components/Loading"
import AuthLayout from "./layout/AuthLayout"
import MainLayout from "./layout/MainLayout"

import PrivateRouter from "./PrivateRoute"

function App(){
  return(
    return (
      <>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<AuthLayout />}>
                <Route path="/signup" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassWord />} />
                <Route path="/email-sent" element={<EmailSent />} />
                <Route
                  path="/reset-password/:token"
                  element={<ResetPassword />}
                />
  
                <Route
                  path="/signup/:faceBookId"
                  element={<RegisterFaceBook />}
                />
              </Route>
              <Route path="/" element={<MainLayout />}>
                <Route
                  index
                  element={
                    <PrivateRouter>
                      <Home />
                    </PrivateRouter>
                  }
                />
  
                <Route path="/:username" element={<Profile />} />
  
                <Route path="/explore" element={<Explore />} />
  
                <Route path="/direct/inbox" element={<MessagesDirect />} />
                <Route path="/direct/:id" element={<Messages />} />
  
                <Route path="/:username/:id" element={<Post />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </>
  )
}

export default App;