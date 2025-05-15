import '@testing-library/jest-dom';
import General, { ComponentData } from "./../ts/general";

jest.useFakeTimers();

describe('General class', () => {
    let general: General;

    beforeEach(() => {
        general = new General();
    });

    it('should format text to class name', () => {
        const result = general.formatTextToClassName('guest room');
        expect(result).toBe('guest_room');
    });

    it('should get the selected component name', () => {
        const mockParentElement = document.createElement('div');
        const mocChildElement = document.createElement('p');
        mocChildElement.textContent = 'guest room';
        mockParentElement.appendChild(mocChildElement);
        mockParentElement.setAttribute('class', 'rooms guest_room');
        const result = general.getSelectedComponentName(mocChildElement);
        expect(result).toEqual('guest room');
    });

    it('should get the component data', () => {
        const result = general.getComponent('guest room');
        expect(result.name).toEqual('guest room');
    });

    it('should render HTML', () => {
        const mockContainer = document.createElement('div');
        const htmlString = '<p>Test</p>';
        general.renderHTML(htmlString, 'beforeend', mockContainer);
        expect(mockContainer.innerHTML).toContain(htmlString);
    });

    it('should create a notification', () => {
        const message = 'Test notification';
        const expectedHTML = `
            <div class="notification">
                <p>${message}</p>
            </div>
        `;
        const result = general.notification(message);
        expect(result.trim()).toEqual(expectedHTML.trim());
    })

    it('should display notification', () => {
        const mockContainer = document.createElement('div');
        const message = 'Test notification';
        const notificationRef = general.notification(message)
        general.displayNotification(notificationRef, 'beforeend', mockContainer);
        expect(mockContainer.innerHTML).toContain(message);
    });

    it('Should formart text to class name', () => {
        const result = general.formatTextToClassName('guest room');
        expect(result).toBe('guest_room');
    });

    it('should toggle element visibility', () => {
        const mockElement = document.createElement('div');
        mockElement.classList.add('hidden');
        general.toggleHidden(mockElement);
        expect(mockElement.classList.contains('hidden')).toBeFalsy();
        general.toggleHidden(mockElement);
        expect(mockElement.classList.contains('hidden')).toBeTruthy();
    });

    it('should update element text content', () => {
        const mockElement = document.createElement('div');
        const newValue = 'New Value';
        general.updateMarkupValue(mockElement, newValue);
        expect(mockElement.textContent).toBe(newValue);
    });

    it('should hide element', () => {
        const mockElement = document.createElement('div');
        general.addHidden(mockElement);
        expect(mockElement.classList.contains('hidden')).toBeTruthy();
    });

    it('should remove hidden class from element', () => {
        const mockElement = document.createElement('div');
        mockElement.classList.add('hidden');
        general.removeHidden(mockElement);
        expect(mockElement.classList.contains('hidden')).toBeFalsy();
    });

});