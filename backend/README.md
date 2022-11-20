## How to install and run inside a docker container

Open terminal in the main directory and type
```shell
docker-compose build
docker-compose up
```

## How to install

Clone the project to your machine, and go to the directory `<cloned_folder>/backend`.
Then open terminal in this directory and type:
```
pip install -r requirements.txt
```

## How to run 

Open terminal in the directory `<cloned_folder>/backend` and type:
```
python manage.py migrate
python manage.py runserver
```
The server will run on `localhost:8000`
