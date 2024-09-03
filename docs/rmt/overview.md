---
sidebar_position: 1
---

# Overview

## What is the Risk Monitoring Tool (RMT)?

RMT is a tool and framework developed by the [European Commission for the Control of Foot-and-Mouth Disease](https://www.fao.org/eufmd/en/) (EuFMD) to monitor the risk of foot-and-mouth disease (FMD) and similar transboundary (FAST) disease transmission between countries.

It is for public officials with knowledge about FAST diseases and their local conditions (like livestock populations and animal trade).

To use the tool, users:

1. Select their home country, and the countries they want to evaluate risks with (source countries).
2. Review data about disease status and mitigation measures in the source countries. They may edit the data if they see something incorrect.
3. Review data about disease transmission pathways.
4. Enter data about the connections between their home country and each source country. For example: livestock and animal product trade, livestock populations near the border.
5. Receive calculated scores on the risk of FAST disease transmission, graphs to visualize the data, and the option to download results.

## Demo

## Tech stack

The RMT is a feature built onto the DB Manager. Please see their [documentation](/docs/db-manager/architecture) for more information on the tech stack.

Briefly, RMT uses:

- MySQL for the database
- Node.js/Express for back end
- Vue for front end, with Pinia for state management
- Tailwind CSS for styling

## Terminology and acronyms

- **FMD** - [Foot and Mouth Disease](https://woah.org/en/disease/foot-and-mouth-disease/)
- **RVF** - [Rift Valley Fever](https://www.cdc.gov/vhf/rvf/index.html)
- **PPR** - [Peste des Petits Ruminants](https://www.woah.org/en/disease/peste-des-petits-ruminants/) (aka “Goat Plague”)
- **LSD** - [Lumpy Skin Disease](https://www.woah.org/en/disease/lumpy-skin-disease/)
- **SGP** - [Sheep and Goat Pox](https://rr-asia.woah.org/en/projects/sheep-pox-and-goat-pox/)
- **FAST diseases** - [FMD And Similar Transboundary diseases](https://www.fao.org/eufmd/global-situation/about-fast-diseases/en/)
- **target country** - the user’s country
- **source country** - countries being evaluated (aka where the source of livestock is coming from)

## Resources

Please review the following resources to understand more about EuFMD's Risk Monitoring Tool:

- [EuFMD's webpage on RMT](https://www.fao.org/eufmd/tools/rmt-fast/en/)
- [Original RMT as an Excel sheet](https://docs.google.com/spreadsheets/d/1In-cu4ROEqjDh8nex12W2gFZx-6pJ0U_/edit?usp=drive_link&ouid=106400728932431541442&rtpof=true&sd=true)
- [Instructions for using RMT](https://drive.google.com/file/d/1ZDEqD-x_SH-2DYOJ830dsCZfwlFpDxmZ/view?usp=drive_link)
- [Summary description](https://drive.google.com/file/d/1WgH70XSs3QNReq6NMMzq2wQrGel7buKO/view?usp=drive_link)
- [Possible applications](https://drive.google.com/file/d/1gklD0nJsFrvoCX-aFir7xgmpeygMcgNd/view?usp=drive_link)

## Future Features

### Development team's wishlist / known bugs:

Bugs:

1. Make it mandatory to select a receiver country before moving past disease status page in the slider. (Currently, you can go through the entire flow and view results without selecting a receiver country.)
2. PDF download:
   i. It would be best to download the PDF of all information directly from the Results page. Currently, it opens a new page with all data combined, and triggers the download from there.
   ii. Some unneeded elements are captured in the PDF download (like "Edit" buttons, and the RMTDownload component in the Results page). It would be ideal to filter these out so only relevant content is included in the PDF.
   iii. Fix alignment and padding in table data. Currently, numbers and text are partially cut off.

Features:

1. Implement thorough unit tests for front and back end.
2. Create a navbar / progress bar to show which step o the process the user is currently on.

Refactoring:

1. Adapt backend code to protect against SQL injection attacks.
2. Create custom-formatted modals for `alert` and `confirm` messages. Currently they are just the default. ("Localhost says:...").
3. Build correct error message rendering.
4. Refactor code to be more portable (aligned with EEuFMD Engineering Guidelines).

## Feedback / wishlist from EUFMD RMT team:

1. Second area selector can be taken out.
2. Select countries should be able to write/seach and to be shown as it is now (when you write a country you see all the ones in the same area and the option 'all of that area'
3. If we do not have data for a country it should come as blank (data is not provided) at the moment is coming 0 in green which is like saying the country is perfect which is data that we do not know
4. One should be able to add an empty row and able to write a region of a country or wathever they want in text
5. reset button to default values on all editable tables
6. A date on when the data was updated should be displayed somewhere 'Data was updated as per ...'
7. Connections if not filling all and pressing continue has a message that you can´t continue, would be great if that message said 'There are some cells with no information would you like to put them as 0 and continue?" so non writen would be taken as 0
8. Results page they have decided to remove the info right table
9. Add map to visualization of results
10. All text is being revised and and updated doc will be shared to edit all.
