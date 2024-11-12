
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel with React Integration

This project uses Laravel as the backend framework and React for the frontend interfaces. The main route (`/`) or homepage displays interfaces built with React components. This setup provides a modern and dynamic user experience on the frontend while leveraging Laravel's powerful backend capabilities.

### Project Structure for React Components

All the React files can be found within the `resources/js` folder, organized as follows:

- **Components**: Located in `resources/js/Components`, this folder contains reusable components such as forms, buttons, and modals.
- **Pages**: Located in `resources/js/Pages`, here you’ll find main pages such as `Dashboard`, `Welcome`, and any other primary pages for your application.

Each React component corresponds to specific functionality or UI parts in the application. The pages are structured to reflect different views that the user interacts with.

### Running Laravel and React

To run the Laravel backend:

1. Make sure Docker is installed and running on your machine.
2. Build and run the container by executing:

   ```bash
   docker-compose up --build
   ```

3. The Laravel server should be accessible at the specified port in the `.env` file, typically `localhost:8000`.

To run the React frontend:

1. Navigate to the `resources/js` directory.
2. Run `npm install` to install necessary dependencies.
3. Start the development server by running:

   ```bash
   npm run dev
   ```

4. The React frontend should now be accessible at `localhost:5173` (or as configured).

### Using Both Laravel and React with Docker

For development, you can run Laravel in a Docker container and React locally. However, you can also set up both Laravel and React to run in the same Docker container.

**Important Note:** Ensure that the ports specified in `.env` do not conflict, especially for `APP_PORT` (Laravel) and `VITE_PORT` (React). Modify these in the `.env` file if needed to avoid any conflicts.

### Environment Variables

- **APP_PORT** - Defines the port for the Laravel server.
- **VITE_PORT** - Defines the port for the Vite server (used by React).

Update these variables in the `.env` file if necessary to ensure that your application runs without port conflicts.

### Troubleshooting

If you encounter issues with updated views not reflecting immediately:

- For Laravel: Clear the cache by running `php artisan view:clear`.
- For React: Restart the Vite development server if changes are not hot-reloading.

If further modifications are required, you may also consider running both frontend and backend on separate containers to minimize conflicts.

## Additional Information

This project uses Laravel for backend logic, authentication, and data handling. React is used to create responsive and interactive interfaces. For more advanced configurations, you may look into managing API calls, state management, and component-based architecture with React.

---

Thank you for exploring this Laravel-React integrated application. If you have any questions or run into issues, please refer to the [Laravel Documentation](https://laravel.com/docs) and [React Documentation](https://reactjs.org/docs/getting-started.html) for guidance.
