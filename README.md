<h1 align="center">SkoolWhiz Angular <span style="font-size:18px">: Dynamic Form and Data Table with Angular
</span>
</h1>

This project was generated using [Vite](https://github.com/angular/angular-cli). Used Angular version 19.1.7.

<div align="center">

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)

![npm](https://img.shields.io/badge/npm-%2320232a?style=for-the-badge&logo=npm&logoColor=CB3837)
![Angular](https://img.shields.io/badge/Angular-%2320232a?style=for-the-badge&logo=angular&logoColor=DD0031)
![TypeScript](https://img.shields.io/badge/typetcript-%2320232a.svg?style=for-the-badge&logo=typescript&logoColor=%fff)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2320232a.svg?style=for-the-badge&logo=tailwind-css&logoColor=%2361DAFB)
![bun](https://img.shields.io/badge/bun-%2320232a?style=for-the-badge&logo=bun&logoColor=CB3837)
![Node.js](https://img.shields.io/badge/Node.js-%2320232a?style=for-the-badge&logo=node.js&logoColor=43853D)
![HTML](https://img.shields.io/badge/HTML-%2320232a?style=for-the-badge&logo=html5&logoColor=E34F26)
![CSS](https://img.shields.io/badge/CSS-%2320232a?style=for-the-badge&logo=css3&logoColor=1572B6)

</div>

## Overview 🧐

This project implements a dynamic web form using Angular that allows users to input their details and displays the submitted data in a table format. Users can edit or delete each entry, and uploaded images are displayed as thumbnails.

## Features ✨

- Input fields for Name, Phone, ID Number, and Picture.
- Display of submitted data in a table format.
- Functionality to edit and delete entries.
- Image upload with thumbnail preview.

## Technologies Used 🛠️

- Angular
- HTML
- CSS
- TypeScript
- Tailwind CSS

## Installation 🚀

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SouZe-San/skoolwhiz-angular.git

   cd skoolwhiz-angular

   ```

2. **Install dependencies:**
   Make sure you have Node.js and Angular CLI installed. Then run:

   ```bash
   bun install
   ```

   or

   ```bash
   npm install

   ```

## Development server 🌐

**Run the application:**

```bash
bun start
```

or

```bash
npm start
```

Open your browser and navigate to `http://localhost:4200/`.

## Building 🏗️

To build the project run:

```bash
ng build

bun build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Usage 📝

1. Fill in the form fields:

   - **Name:** Enter the name (String).
   - **Phone:** Enter the phone number (String or numeric).
   - **ID Number:** Enter the ID number (String or numeric).
   - **Picture:** Upload an image file (JPEG, JPG, PNG).

2. Click the **Save** button to append the data to the table.

3. Each entry in the table will display:

   - Name
   - Phone
   - ID Number
   - Uploaded Picture (as a thumbnail)

4. To edit an entry, click the **Edit** button next to the respective row. The form will be populated with the existing data, allowing you to make changes.

5. To delete an entry, click the **Delete** button next to the respective row. A confirmation prompt will appear before the entry is removed.

## Code Structure 📁

- **src/app**

  - **user-form/**: Main component handling form submission and Form UI.
  - **user-table/**: Main component handling form Data and View In table.
  - **models/**: Define TypeScript interfaces for data models.
  - **services/**: Data handling and managing.

  - **main.ts**: Main component handling form submission and data management.
  - **style.css**: Styles for the application.

## License 📝

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Angular documentation for guidance on building components and services.
- Community resources for best practices in form handling and data management.
