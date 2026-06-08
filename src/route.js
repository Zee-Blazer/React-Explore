
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Screens
import HomeScreen from './screens/home.screen';
import ColorScreen from './screens/color.screen';
import TodoScreen from './screens/todo.screen';

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/color" element={<ColorScreen />} />
                <Route path="/todo" element={<TodoScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
