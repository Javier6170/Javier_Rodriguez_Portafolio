import { Component, OnInit } from '@angular/core';
import { Container, Engine } from 'tsparticles-engine';
import { MoveDirection, ClickMode, HoverMode, OutMode } from "tsparticles-engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
   boolMenu = 0

  mostrar(){

    let menu = document.getElementById('menu');
    let barChildFirst = document.getElementById('first-child')
    let barChildSecond = document.getElementById('second-child')
    let barChildLast = document.getElementById('last-child')
    let menuPrincipal = document.getElementById('menuPrincipal')

    if (this.boolMenu == 0) {    
        menu!.style.background = '#000428';
        menu!.style.background = '-webkit-linear-gradient(to right, #000428, #004e92)';
        menu!.style.background = 'linear-gradient(to right, #000428, #004e92)';
        menu!.style.padding = '26px 26px 400vw 400vw'
        menu!.style.zIndex = '2;'
        

        
        menuPrincipal!.style.display = 'flex'
        barChildFirst!.style.transform = 'rotate(45deg)';
        barChildSecond!.style.opacity = '0';
        barChildLast!.style.transform = 'rotate(-45deg)'


        console.log(menu) 
        this.boolMenu = 1
    }
    else{
        menu!.style.padding = '0 0 0 0'
        this.boolMenu = 0
        menuPrincipal!.style.display = 'none'

        barChildFirst!.style.transform = 'rotate(0deg)';
        barChildSecond!.style.opacity = '100';
        barChildLast!.style.transform = 'rotate(0deg)'

    }

    
    
  }

  id = "tsparticles";

    /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
    particlesUrl = "http://foo.bar/particles.json";

    /* or the classic JavaScript object */
    particlesOptions = {
        background: {
            color: {
                value: "#000000",
            },
        },
        fpsLimit: 180,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: HoverMode.repulse,
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 1,
                },
                repulse: {
                    distance: 120,
                    duration: 0.9,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 125,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.bounce,
                },
                random: false,
                speed: 4,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
                },
                value: 70,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 2 },
            },
        },
        detectRetina: true,
    };

    particlesLoaded(container: Container): void {
        console.log(container);
    }

    async particlesInit(engine: Engine): Promise<void> {
        console.log(engine);

        await loadFull(engine);
    }


}
