import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center -mt-12 py-6 bg-slate-800 text-slate-400">
      <div>
        <a href="https://imgflip.com/i/6e29t8">
          <img
            src="https://i.imgflip.com/6e29t8.jpg"
            title="made at imgflip.com"
          />
        </a>
      </div>

      <a href="https://www.freepik.com/vectors/sweet-bakery" className="mt-4">
        Sweet bakery vector created by smithytomy - www.freepik.com
      </a>
      <p>&copy; Mitja</p>
    </div>
  );
}

export default Footer;
