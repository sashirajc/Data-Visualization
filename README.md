# Data-Visualization
Udacity Data Visualization Project by Sashiraj Chandrasekaran

##Summary

This project uses the Titanic Dataset. The dataset contains the name, age, gender, passenger class, survial,ticket, fare, cabin number, embarkation location and info on family members travelling along. The chart explores the number of people who perished vs the number of people who survived in the Titanic shipwreck. The chart further divides people by the passenger class that they travelled in. The design and feedback are provided in the next sections.


##Design

The project uses HTML, CSS, Javascript. HTML is used for the general structure of the page, CSS for the styling and dimple.js javascript library for the visualizations in the project.

*Visual Encoding:*
The data used in this Visualization is categorical. Hence a column chart is the best fit for this visualization. The three passenger classes are depicted as three sets of columns. Each set has one column for the people who perished and the second column for the people who survived.

The data had to be modified a bit, to ensure that the legend showed perished/survived instead of 0/1. The survived column in the dataset was modified. The 0 in the column were replaced with Perished and 1 is replaced with Survived.

The animation draws a line to the Y-axis. This is useful to compare the different columns based on the Y-axis. This is useful for some of the columns which have values that are close to each other.


##Feedback
###Feedback #1:

    1.What do you notice in the visualization?
    Ans.Two colours are used to represent the passengers from the ship Titanic. The passengers who survived are in blue colour and the passengers who perished are in red colour. The visualization shows the number of passengers who survived/perished in each passenger class.

    2.What questions do you have about the data?
    Ans. Further breakdown on age, gender would be good.

    3.What relationships do you notice?
    Ans. Passengers in the lower classes seem to have a higher chance of perishing compared to passengers in the higher class.

    4.What do you think is the main takeaway from this visualization?
    Ans. Highest class has high number of survivors while lowest class has very few survivors.

    5.Is there something you don’t understand in the graphic?
    Ans. No

    6.How can this visualization be improved?
    Ans. The passenger class is slightly misleading. It would be better if the passenger class had a different representation that just number? It gives the false impression that the 3 class is the highest class on first glance.

###Feedback #2:
    1.What do you notice in the visualization?
    Ans. Red indicates perished and blue indicates survived.

    2.What questions do you have about the data?
    Ans. Of the people who died and survived, what percentage were male and female?

    3.What relationships do you notice?
    Ans. More people survive in the first class but most people died in third class.

    4.What do you think is the main takeaway from this visualization?
    Ans. Same as 3?

    5.Is there something you don’t understand in the graphic?
    Ans. Nothing really..

    6.How can this Visualization by improved?
    Ans. Larger axis labels

###Feedback #3:
    1.What do you notice in the visualization?
    Ans. The passengers on the Titanic are divided based on whether they survived or not. The axis labels are a bit difficult to read.

    2.What questions do you have about the data?
    Ans. Is the dataset complete? There were more passengers on the ship than the number of passengers on this visualization.

    3.What relationships do you notice?
    Ans. People in higher classes have a better chance of survival.

    4.What do you think is the main takeaway from this visualization?
    Ans. Next time you are on a ship, buy a ticket for the highest class.

    5.Is there something you don’t understand in the graphic?
    Ans. No.

    6.How can this visualization be improved?
    Ans. Larger axis labels and better communication of the data presented.

##Post-feedback design:
    Based on the feedback,
    1.I decided to increase the text-size of the axis labels to make it easier to read.
    2.I also decided to do some further data transformation to display the passenger class in words rather than numbers.
    3.I also added a short section explaining the passenger class and that the data doesn't have info on all the passengers who were onboard the Titanic but rather it is a subsection of the passengers on the Titanic.
    4.The words 'first' and 'highest' are in bold to help the reader draw a visual connection between first and highest. Similarly 'third' and 'lowest' have a connection using italics. This helps to reinforce the order of the classes to the reader.
    5.The passenger class on X-axis starts from third class instead of first class. This is to further reinforce that 3rd class is the lowest class.
    6.Chart info on hover also updated to make it more clear to viewers. 'Pclass' replaced by 'Class', 'Survived' replaced by 'Status'. New data columns are created at the data munging stage to aid in this.

##Future Work:
    There is scope for future work. The visualization can be further divided into gender/age to see how people of different genders in different passenger classes fared.

##Resources
https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis
https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend
http://blog.invisionapp.com/finding-the-right-color-palettes-for-data-visualizations/
