import { useState } from "react";

import css from "./styles";

// router import
import { Switch, Route } from "react-router-dom";

// component imports
import Nav from "./components/Nav";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Article from "./components/Article";
import Column from "./components/Column";

import whaleAvatar from "./img/whale.png";

export default function App() {
  const [darkMode, toggleDarkMode] = useState(false);

  const handleClick = () => toggleDarkMode(!darkMode);

  return (
    <>

      <div
          className="br-100 h3 w3 dib fr flex justify-around items-center link dim "
          style={{ background: darkMode ? css.dark.bg04 : css.light.bg03 }}
          onClick={handleClick}
        >
          {darkMode ? (
            <i class="fas fa-moon fa-3x"></i>
          ) : (
            <i class="fas fa-sun fa-3x"></i>
          )}
        </div>

      <Nav
        navStyles={{
          background: darkMode ? css.dark.bg04 : css.light.bg03,
          color: darkMode ? css.dark.fg05 : css.light.fg03,
        }}
        homeLinkStyles={{ color: darkMode ? css.dark.fg01 : css.light.fg05 }}
        abootLinkStyles={{ color: darkMode ? css.dark.fg05 : css.light.fg03 }}
        colonyLinkStyles={{ color: darkMode ? css.dark.fg05 : css.light.fg03 }}
      />

      {/*  main display section */}
      <section>
        <Switch>
          <Route path="/aboot">
            <Aboot />
          </Route>
          <Route path="/colony">
            <Gallery />
          </Route>
          <Route path="/">
            <Home>
              <Hero
                styles={{
                  background: darkMode ? css.dark.bg04 : css.light.bg03,
                  color: darkMode ? css.dark.fg05 : css.light.fg03,
                }}
                title="crypto_pengi title"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi officiis, quos minima eligendi laudantium animi dolorum sunt suscipit quam, officia illum ad. Nihil, ab voluptates."
              />

              <Column>
                <Article
                  containerStyles={{
                    background: darkMode ? css.dark.bg03 : css.light.bg06,
                    color: darkMode ? css.dark.fg02 : css.light.fg02,
                  }}
                  title="read al'aboot it"
                  imgSrc={whaleAvatar}
                  imgAlt="whale avatar"
                  textOne="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi officiis, quos minima eligendi laudantium animi dolorum sunt suscipit quam, officia illum ad. Nihil, ab voluptates."
                  textTwo="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi officiis, quos minima eligendi laudantium animi dolorum sunt suscipit quam, officia illum ad. Nihil, ab voluptates.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi officiis, quos minima eligendi laudantium animi dolorum sunt suscipit quam, officia illum ad. Nihil, ab voluptates."
                />
              </Column>
            </Home>
          </Route>
        </Switch>
      </section>
    </>
  );
}

function Aboot() {
  return <h2>About</h2>;
}

function Gallery() {
  return <h2>colony gallery</h2>;
}
