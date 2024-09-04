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

## Access

Access the [live version of the tool here](https://eufmd-db-manager.onrender.com/#/). Ask the team for admin login info.

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

### Feedback from EUFMD RMT team

These features and fixes were requested by the RMT team after the first iteration of the app, and are higher priority. Ask Pilar or Chanice if anything is unclear.

1. Type-to-select for the receiver country dropdown (rather than scrolling through all countries). This feature has been started on the branch `branch-name` (Stefania TBD).
2. Second area selector can be taken out.
3. Select countries should be able to write/seach and to be shown as it is now (when you write a country, you see all the ones in the same area and the option 'all of that area')
4. If we do not have data for a country it should come as blank (data is not provided) at the moment is coming 0 in green which is like saying the country is perfect which is data that we do not know
5. One should be able to add an empty row and able to write a region of a country or wathever they want in text
6. reset button to default values on all editable tables
7. A date on when the data was updated should be displayed somewhere 'Data was updated as per ...'
8. Connections if not filling all and pressing continue has a message that you can´t continue, would be great if that message said 'There are some cells with no information would you like to put them as 0 and continue?" so non writen would be taken as 0
9. Results page they have decided to remove the info right table
10. Add map to visualization of results
11. All text is being revised and and updated doc will be shared to edit all.

### Development team's wishlist

These are features and fixes that the original development team wanted to implement, but didn't get to. Ask Maria, Stefania or Zoe if anything is unclear.

#### Bugs

1. Make it mandatory to select a receiver country before moving past disease status page in the slider. (Currently, you can go through the entire flow and view results without selecting a receiver country.)
2. PDF download:
   1. It would be best to download the PDF directly from the Results page. Currently, it opens a new page with all data combined, and triggers the download from there.
   2. Some unneeded elements are captured in the PDF download (like "Edit" buttons, and the RMTDownload component in the Results page). It would be ideal to filter these out so only relevant content is included in the PDF.
   3. Fix alignment and padding in table data. Currently, numbers and text are partially cut off.

#### Features

1. Accessibility feature: hovering over data in the table should highlight the corresponding information in the key. This feature has been started on the branch `rmt/feature/accessibility-hover`.
2. Implement thorough unit tests for front and back end.
3. Create a navbar / progress bar to show which step of the process the user is currently on.

#### Refactoring

1. Adapt backend code to protect against SQL injection attacks.
2. Create custom-formatted modals for `alert` and `confirm` messages. Currently they are just the default. ("Localhost says:...").
3. Build correct error message rendering.
4. Refactor code to be more portable (aligned with EEuFMD Engineering Guidelines).
