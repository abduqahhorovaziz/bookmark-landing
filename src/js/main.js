const tabElements = [
    {
        id: 'simple',
        triggerEl: document.querySelector('#simple-tab'),
        targetEl: document.querySelector('#simple')
    },
    {
        id: 'speedy',
        triggerEl: document.querySelector('#speedy-tab'),
        targetEl: document.querySelector('#speedy')
    },
    {
        id: 'easy',
        triggerEl: document.querySelector('#easy-tab'),
        targetEl: document.querySelector('#easy')
    },
];

// options with default values
const options = {
    defaultTabId: 'simple',
    activeClasses: 'text-orange-600 hover:text-blue-600 border-orange-600',
    inactiveClasses: 'text-gray-500 hover:text-gray-600 border-gray-100 hover:border-gray-300',
    onShow: () => {
        console.log('tab is shown');
    }
};

let acc = document.getElementsByClassName("accordion");


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}