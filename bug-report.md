# 4. Bug report
While performing the 2nd test on point 1 (Top Box Office test) you found each time you try to rate a movie with 10 stars, the Rate button is not enabled, so you cannot submit the data. Write a bug to report this issue.
Go to IMDb.com, unfold the Menu and navigate to the Top Box Office section; then click on the 2nd item on the Top box office list; then click on the IMDb Rating button, click on the Rate button, and set a 5 stars Rating and click on the Rate button in the modal.


## Bug Report 
Title: Unable to Submit 10-Star Ratings in IMDb's Top Box Office Section

Summary:
The "Rate" button is not enabled when a user selects a 10-star rating for movies listed in the Top Box Office section on IMDb.
Other star ratings (1-9) enable the "Rate" button correctly.
Issue is reproducible consistently across different browsers and devices.
No error message is displayed when the "Rate" button remains disabled.

Steps to Reproduce:
1. Navigate to IMDb.com.
2. Open the "Menu" and go to the "Top Box Office" section.
3. Click on the 2nd movie in the Top Box Office list.
4. Click on the "IMDb Rating" button to open the rating interface.
5. Select 10 stars to rate the movie.

Expected Behavior:
The "Rate" button should become enabled when a user selects any valid rating, including 10 stars, allowing the user to submit their rating.

Actual Behavior:
The "Rate" button remains disabled when the user selects 10 stars, preventing submission of the rating.

Environment:
Platform: Web
Browser: Chrome (Version 131.0.6778.86), Firefox, Safari
Operating System: macOS Monterey
Severity: Medium

Attachments:
Screenshot and/or screencast.
