import { Grid, Typography } from "@mui/material";
import React from "react";
import { useLayoutEffect } from "react";
import Footer from "../elements/Footer/Footer";
import NavBar from "../elements/NavBar/NavBar";

export default function About(){
    useLayoutEffect(() => {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("AUTH");
    }, []);

    return (
        <>
            <NavBar img="assets/background-one.jpg" />
            <Grid container className="about center">
                <div className="text-about">
                    <Grid container className="center">
                        <img alt="not found" className="logo" src="assets/logo.png"/>
                    </Grid>
                    <Grid container className="center">
                        <Typography variant="h2" className="title-home" style={{marginBottom: '2%'}}>Información de la empresa</Typography>
                    </Grid>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim debitis veniam ab officiis, tempora assumenda non? Corporis minima ratione, nemo consequatur accusantium fugit modi veritatis vero obcaecati aspernatur, quasi esse!
                    Reprehenderit praesentium consequuntur quos quasi inventore possimus, doloribus aliquam amet laboriosam animi aut, similique earum a dolorum optio labore eligendi quis! Culpa, magnam esse. Labore cumque adipisci alias ad omnis?
                    Consequuntur fugit error quis eligendi culpa soluta doloremque, facere ducimus! Itaque impedit harum facere labore optio odit velit porro provident pariatur saepe, illo iusto? Dolorem perferendis fugiat quaerat necessitatibus quis.
                    Assumenda quia sunt officiis? Minus similique molestiae aspernatur incidunt animi at exercitationem impedit architecto totam aperiam et numquam unde a, alias quod doloremque ea natus id odio? Autem, magni expedita!
                    Quam aspernatur illum, possimus tenetur delectus ad inventore repellendus maiores vel quasi ab mollitia eligendi, ipsam accusamus consectetur eaque veritatis provident nostrum reiciendis impedit consequatur temporibus! Iste, illum. Aliquam, placeat?
                    Perferendis fugiat fugit temporibus doloribus repellat soluta veniam eos et adipisci. Maxime hic, voluptas earum dolores necessitatibus blanditiis cumque. Magni a itaque eligendi cupiditate expedita velit pariatur. Sapiente, ipsa fuga.
                    Modi amet saepe architecto dolore temporibus qui non delectus, porro, nam incidunt perspiciatis reiciendis. Fugit, sapiente voluptatum nulla distinctio sit maxime fuga, totam labore a doloribus esse. Rerum, libero repellat.
                    Vero provident impedit laborum veniam officiis perferendis facere quo voluptatem earum labore, ipsam nulla pariatur, eaque velit quasi ipsa aliquid minima. Doloribus necessitatibus temporibus excepturi ipsa obcaecati natus nulla possimus.
                    Minus ab numquam minima, vero aut libero, neque, dicta error inventore magni maiores placeat ex soluta perferendis molestiae aspernatur quasi deserunt? Autem sed provident temporibus maxime consequatur assumenda ab tempora.
                    Mollitia assumenda nisi explicabo laborum. Amet, laudantium, non cumque sit aspernatur error labore vero inventore quam facilis aliquid placeat numquam. Consectetur consequuntur quasi, esse laborum soluta distinctio inventore officiis architecto.
                    Modi assumenda quod harum aliquam eveniet ab, ipsam non quo quae asperiores esse incidunt! Perspiciatis tempore numquam, deserunt adipisci officiis ipsam vel necessitatibus assumenda, mollitia illo sequi consectetur, ratione veniam?
                    Explicabo, mollitia quasi ipsa velit minima id assumenda, praesentium eos blanditiis laudantium beatae exercitationem numquam qui quidem iusto perspiciatis delectus ipsum dicta hic maxime. Impedit suscipit incidunt odit accusantium iste!
                    Eveniet delectus minima numquam, quisquam eaque facilis repellat nobis corporis cum enim itaque. Et maxime animi commodi delectus tempore sit fugiat, ipsam reiciendis blanditiis ad facere aliquam quis. Cumque, asperiores?
                    In dolores numquam ducimus reprehenderit eos, repudiandae saepe illum cumque dolor sapiente quae odit vero consequuntur quidem quia sed ipsum tempora odio non ut illo, suscipit minus inventore! Fugiat, architecto?
                    Quia repellendus perferendis debitis, tenetur iusto modi magnam architecto praesentium quisquam vero. Modi quasi cumque deleniti, similique eveniet laudantium veritatis, ipsam ab ullam omnis placeat incidunt fugit labore quo voluptas?
                    Adipisci laborum, praesentium quia consequuntur, sit provident quod pariatur assumenda ab nostrum aut dicta vitae, error perspiciatis corporis! Minima, assumenda consequatur! Laboriosam corporis fugiat qui cum ipsa dolorum pariatur magnam.
                    Beatae magni earum natus iste nesciunt nobis impedit esse non possimus! Et illo recusandae exercitationem nulla excepturi, error mollitia, iusto velit ad rem dolor ea vero perspiciatis ab reprehenderit omnis.
                    Fuga, deserunt cum! Et earum praesentium quas eius sunt harum deleniti repellat omnis soluta totam. Unde nulla autem culpa facere aliquam ut. Nesciunt et dolorum, vero reprehenderit voluptatem magnam consectetur?
                    Consectetur tempore earum adipisci animi quo quam a expedita vel obcaecati? Sequi veritatis labore placeat nam error suscipit ipsa id! Consectetur qui impedit explicabo veritatis magni officiis dolorem illo. Voluptatum?
                    Voluptate iusto officia, totam laudantium vel modi provident iste minima commodi voluptas, molestiae praesentium distinctio in quisquam numquam laborum necessitatibus quis eius aperiam explicabo quod enim. Autem minus tenetur provident.
                </div>
            </Grid>
            <Footer />
        </>
    )
}