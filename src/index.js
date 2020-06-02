import './style.scss';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello Webpack!';

  console.log(process.env.DB_HOST);
  console.log(process.env.ASSET_PATH);

  return element;
}

document.body.appendChild(component());

module.hot.accept();
