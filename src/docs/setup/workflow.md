
# git branching model
Main Project branches

1. development - main development branch, all pull requests are to be made to this branch
2. staging - testing and lead developer review and confirmation branch
3. master - this the deployed branch

#### Contribution Guidelines
1. create a new branch from development  for anything you are working on, 
    the branch name should be relevant to the change being made, 
    e.g `text_input_validation` , `service_worker_cache_configuration` 

2. When done create a pull request to the *development* branch for review 
    You can also alert or assign reviews to hasten the review process.
     
3. If it's okay and the changes are merged,  
    the branch should be deleted and start with a new branch from development for the next change

> An edit to files not related to changes as described wont be merged  
> Incomplete development on the changes described won't be merged

--
pushing to the development branch is restricted
you'll be pushing to new branches created from development
the branch name should be prefixed with the relevant topic as listed below
- hotfix/
- bugfix/
- feature/
- release/

e.g feature/payments-template-design-implementation
--


# Release management
