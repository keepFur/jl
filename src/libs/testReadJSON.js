import skills from './skills';

function changeContent() {
    skills[0].value = 'node.js';
    return skills;
}
changeContent();