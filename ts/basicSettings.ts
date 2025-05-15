'use strict'

import General, { ComponentData } from "./general";

class Light extends General {
    constructor() {
        super();
    }

    notification(message: string):string {
        return `
            <div class="notification">
                <div>
                    <img src="./assets/svgs/checked.svg" alt="checked svg icon on notifications" >
                </div>
                <p>${message}</p>
            </div>
        `;

    }

    displayNotification(message: string, position: InsertPosition, container: HTMLElement): void {
        const html = this.notification(message);
        this.renderHTML(html, position, container);
    }

    removeNotification(element: HTMLElement): void {
        setTimeout(() => {
            element.remove();
        }, 5000);
    }

    lightSwitchOn(lightButtonElement: HTMLElement):void {
        lightButtonElement.setAttribute('src', './assets/svgs/light_bulb.svg');
        lightButtonElement.setAttribute('data-lightOn', './assets/svgs/light_bulb_off.svg');
    }

    lightSwitchOff(lightButtonElement: HTMLElement):void {
        lightButtonElement.setAttribute('src', './assets/svgs/light_bulb_off.svg');
        lightButtonElement.setAttribute('data-lightOn', './assets/svgs/light_bulb.svg');
    };

    lightComponentSelectors(lightButtonElement: HTMLElement):{room: string, componentData: ComponentData, childElement: Element | null, background: Element | null} {
        const room = this.getSelectedComponentName(lightButtonElement);
        // FIX: const componentData = this.getComponent(room[0]);
        const componentData = this.getComponent(room);
        const childElement = lightButtonElement.firstElementChild;
        const background = this.closestSelector(lightButtonElement, '.rooms', 'img');
        return { room, componentData, childElement, background };
    }

    toggleLightSwitch(lightButtonElement: HTMLElement):void {
        const { componentData: component, childElement, background } = this.lightComponentSelectors(lightButtonElement);
        const slider = this.closestSelector(lightButtonElement, '.rooms', '#light_intensity') as HTMLInputElement

        if (!component) return;

        component.isLightOn = !component.isLightOn;

        if (component.isLightOn) {
            this.lightSwitchOn(childElement as HTMLElement);
            component.lightIntensity = 5;
            const lightIntensity = component.lightIntensity / 10;
            this.handleLightIntensity(background as HTMLElement, lightIntensity);
            slider.value = component?.lightIntensity.toString()
        } else {
            this.lightSwitchOff(childElement as HTMLElement);
            this.handleLightIntensity(background as HTMLElement, 0);
            slider.value = '0';
        }
    }

    handleLightIntensitySlider(element: HTMLElement, intensity: number):void {

        const { componentData } = this.lightComponentSelectors(element);

        if (typeof (intensity) !== 'number' || isNaN(intensity)) return;

        componentData.lightIntensity = intensity;

        const lightSwitch: Element | null = this.closestSelector(element, '.rooms', '.light-switch');

        if (intensity === 0) {
            componentData.isLightOn = false;
            this.sliderLight(componentData.isLightOn, lightSwitch as HTMLElement);
            return;
        }
        if (!componentData || !lightSwitch) return;
        componentData.isLightOn = intensity !== 0;
        this.sliderLight(componentData.isLightOn, lightSwitch as HTMLElement);
    
        // componentData.isLightOn = false;
        // this.sliderLight(componentData.isLightOn, lightSwitch as HTMLElement);
    }

    sliderLight(isLightOn: Boolean, lightButtonElement: HTMLElement):void {
        const { componentData: component, childElement, background } = this.lightComponentSelectors(lightButtonElement);

        if (!component) return;

        if (isLightOn) {
            this.lightSwitchOn(childElement as HTMLElement);
            const lightIntensity = component.lightIntensity / 10;
            this.handleLightIntensity(background as HTMLElement, lightIntensity);
        } else {
            this.lightSwitchOff(childElement as HTMLElement);
            this.handleLightIntensity(background as HTMLElement, 0);
        }
    }

}



export default Light;
