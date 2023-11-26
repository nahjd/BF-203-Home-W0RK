import React from 'react'

const DataJson = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        authenticated ? (
                            <>
                                <Header
                                    onLogout={handleLogout}
                                    setAuthenticated={setAuthenticated}


                                />
                                <Outlet />
                            </>
                        ) : (
                            <Routes>
                                <Route
                                    index
                                    element={
                                        <Login
                                            users={state.users}
                                            dispatch={dispatch}
                                            email={state.email}
                                            password={state.password}
                                            user={state.user}
                                            onLogin={handleLogin}
                                            authenticated={authenticated}
                                            setAuthenticated={setAuthenticated}
                                        />
                                    }
                                ></Route>
                            </Routes>
                        )
                    }

                >
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default DataJson