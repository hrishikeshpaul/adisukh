# Aditi Sukhjivan Wedding

## How to change the data

1. Navigate to folder `src/common`. You will see a file called `Data.json`. Or go [here](https://github.com/hrishikeshpaul/adisukh/edit/main/src/common/Data.json) to edit the file.
2. Edit the events and the rsvp link. Please don't change the IDs of the events. If you do that you will need to put those Ids in the URL.
3. Once you finish editing, go to the top right corner and commit the changes. This will save the changes.
4. Wait for 2-3mins and you'll see the changes live at https://adisukh.com.


## How to use
1. The landing page will be at https://adisukh.com - which will just be basic. This will not show any events or rsvp links.
2. To see events you need to go to a specific route, which is https://adisukh.com/invite?e=123
3. The `?e=123` is very important because it will determine what events need to be shown. Since there are groups of people being invited to different events, you can show one or a combination of events. For example
   - https://adisukh.com/invite?e=123 (all 3 days)
   - https://adisukh.com/invite?e=1 (1st day only)
   - https://adisukh.com/invite?e=12 (first 2 days only)
   - https://adisukh.com/invite?e=23 (2nd and 3rd day)
   - https://adisukh.com/invite?e=2 (2nd day only)
   - https://adisukh.com/invite?e=3 (3rd day only)
   - https://adisukh.com/invite?e=13 (1st and 3rd day only)

## How to develop

```
# Local development
$ git clone https://github.com/hrishikeshpaul/adisukh.git
$ cd adisukh
$ yarn install # (or npm install)
$ yarn start # (or npm start)
```

