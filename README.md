# RESTful API 

RESTful API for Wikipedia-like Title and Contents
This is a RESTful API made using JavaScript, Express.js, and Mongoose. 
It is designed to provide a similar functionality to the Wikipedia API, allowing users to retrieve titles and contents from a database of articles. 
This README file will provide an overview of the API, instructions for setup and installation, and information about how to use the API.. 

## Installation
To use this API, you will need to install Node.js and npm on your machine.

->Clone this repository: git clone https://github.com/prakharpandeyyy/wikiAPI.git
->Navigate to the project directory: cd repo-name
->Install the dependencies:
->For the backend: npm install
->For the frontend: cd public && npm install
->Start the server: nodemon app.js
->Open your web browser and go to http://localhost:3000

## Usage

```bash
To use the API, you can send HTTP requests to the server using a tool like Postman or any other API client. 
The server will return data in JSON format.

```
## Endpoint	HTTP Method	Description
```
/articles	GET	Returns a list of all articles.
/articles/:id	GET	Returns an article with the specified ID.
/articles	POST	Adds a new article to the database.
/articles/:id	PUT	Updates an existing article with the specified ID.
/articles/:id	DELETE	Deletes an article with the specified ID.
```



## Testing
The project has the following structure:
```bash
To test the API, you can use Postman or any other API client. You can send HTTP requests to the server using the endpoints listed above.

```
## Contributing

Contributions are welcome. Please open an issue or submit a pull request to suggest improvements or bug fixes.

## License

[MIT](https://choosealicense.com/licenses/mit/)
