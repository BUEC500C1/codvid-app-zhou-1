# Codvid app     


## Requirements   
https://docs.google.com/presentation/d/1R1i_fc9uAcSylbZ0uu6gma8cF5VG0DXqznYduvO1VCQ/edit#slide=id.g7f879d7cb3_0_412    
Use CODVID-19 [API](https://covid19api.com/) ([Documentation using postman](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest)) to build mobile application that displays:     
1. CODVID cases per country on a MAP   
2. CODVID cases per country Live on a MAP (changes)   
3. CODVID cases per country based on a date.   
4. Summary of total cases for the world   
5. Live Summary for the World    

### Stretch goal:
1. Display data per Province
2. User can put their address and track CODVID-19 in their neighborhood (Only in countries where regional data is provided) 
   

## Process    
#### Step 1:  Setup your REACT Native Environment [Done]        
Download Expo CLI     
Use npm to install the Expo CLI:    
```
npm install -g expo-cli
```
But since I my laptop was crushed, I will try web version - Snack.      

#### Step 2: Build and run Hello App on emulator and phone [Done]      
It is easy, just follow this link: https://reactnative.dev/docs/getting-started    
Detailed code in this project can be viewed in [1. HelloApp folder.](https://github.com/BUEC500C1/codvid-app-zhou-1/tree/master/1.%20HelloApp)     
The result image shows like below:    
![demo](/img/hello.PNG)    

#### Step 3:  Develop use case to display a map [Done]     
Create a location-finder App.      
The dependencies for this project while we are making this project are:     
1. expo        
2. react       
3. react-native       
4. react-native-maps     

Last, integrating React Native Maps in my React Native App which means that import MapView in React Native app.     
Detailed code in this project can be viewed in [2. DisplayMapApp folder.](https://github.com/BUEC500C1/codvid-app-zhou-1/tree/master/2.%20DisplayMapApp)     
The result image shows like below:    
![demo](/img/mapDisplay.PNG)       


#### Step 4:  On separate branch, exercise the CODVID-19 API (Documentation using postman) and display the data in your application as text.  Be fancy!  Style your results. [Done]      
Version 3 is what I have done for step 4.     
Firstly, my app will get today's date automatically. Then it allows user to do below 2 things:        
First, user can see current global data about CODVID-19.      
Second, user can type in country's name and my app will show them the report about current CODVID-19's spread situation like confirmed, deaths, recovered cases.   

##### Current Version - version 3     
Gif for version 3 result looks like below:    
![gif3](/img/COVID19-APP_version3.gif)  

##### Previous Versions 
Gif for version 2 result looks like below:    |    Gif for version 1 result looks like below:   
:-------------------------:|:-------------------------:
![gif2](/img/COVID19-APP_version2.gif)    |    ![gif1](/img/COVID19-APP_version1.gif)    


#### Step 5:  Overlay the data on the maps. [Doing...]        
Show 3 different kinds of cases in target place's country.      

![dataonmap](/img/textOnMap.PNG)     







