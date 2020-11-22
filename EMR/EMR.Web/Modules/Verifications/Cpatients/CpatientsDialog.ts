
namespace EMR.Verifications {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class CpatientsDialog extends Serenity.EntityDialog<CpatientsRow, any> {
        protected getFormKey() { return CpatientsForm.formKey; }
        protected getIdProperty() { return CpatientsRow.idProperty; }
        protected getLocalTextPrefix() { return CpatientsRow.localTextPrefix; }
        protected getNameProperty() { return CpatientsRow.nameProperty; }
        protected getService() { return CpatientsService.baseUrl; }

        protected form = new CpatientsForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }

        private cvisitsTabGrid: CvisitsTabGrid;
        private cvitalsignsGrid: CvitalsignsTabGrid;
        private cpatienthistoryGrid: CpatienthistoryTabGrid;
        private cphysicalexaminationGrid: CphysicalexaminationTabGrid;
        private clabtestsGrid: ClabtestsTabGrid;
        private cimagingsGrid: CimagingsTabGrid;
        private cdiagnosisGrid: CdiagnosisTabGrid;
        private cmedprescriptionsGrid: CmedprescriptionsTabGrid;
        private crecommendationsGrid: CrecommendationsTabGrid;
        private cbloodtransfusionsGrid: CbloodtransfusionsTabGrid;
        private cmedadministrationGrid: CmedadministrationTabGrid;


        private loadedState: string;

        constructor() {
            super();


            this.cvisitsTabGrid = new CvisitsTabGrid(this.byId('CvisitsGrid'));
            this.cvisitsTabGrid.openDialogsAsPanel = true;

            this.cvitalsignsGrid = new CvitalsignsTabGrid(this.byId('CvitalsignsGrid'));
            this.cvitalsignsGrid.openDialogsAsPanel = true;

            this.cpatienthistoryGrid = new CpatienthistoryTabGrid(this.byId('CpatienthistoryGrid'));
            this.cpatienthistoryGrid.openDialogsAsPanel = true;
            
            this.cphysicalexaminationGrid = new CphysicalexaminationTabGrid(this.byId('CphysicalexaminationGrid'));
            this.cphysicalexaminationGrid.openDialogsAsPanel = true;

                        
            this.clabtestsGrid = new ClabtestsTabGrid(this.byId('ClabtestsGrid'));
            this.clabtestsGrid.openDialogsAsPanel = true;    
            
            this.cimagingsGrid = new CimagingsTabGrid(this.byId('CimagingsGrid'));
            this.cimagingsGrid.openDialogsAsPanel = true;   
            
            this.cdiagnosisGrid = new CdiagnosisTabGrid(this.byId('CdiagnosisGrid'));
            this.cdiagnosisGrid.openDialogsAsPanel = true;
                        
            this.cmedprescriptionsGrid = new CmedprescriptionsTabGrid(this.byId('CmedprescriptionsGrid'));
            this.cmedprescriptionsGrid.openDialogsAsPanel = true;       
            
            this.crecommendationsGrid = new CrecommendationsTabGrid(this.byId('CrecommendationsGrid'));
            this.crecommendationsGrid.openDialogsAsPanel = true;     
            
            this.cbloodtransfusionsGrid = new CbloodtransfusionsTabGrid(this.byId('CbloodtransfusionsGrid'));
            this.cbloodtransfusionsGrid.openDialogsAsPanel = true;
                        
            //this.cmedadministrationGrid = new CmedadministrationTabGrid(this.byId('CmedadministrationGrid'));
            //this.cmedadministrationGrid.openDialogsAsPanel = true;


            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

        }
        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        loadEntity(entity: CpatientsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Cvisits', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Cvitalsigns', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Cpatienthistory', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Cphysicalexamination', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Clabtests', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Cimagings', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Cdiagnosis', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Cmedprescriptions', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Crecommendations', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Cbloodtransfusions', this.isNewOrDeleted());
            //Serenity.TabsExtensions.setDisabled(this.tabs, 'Cmedadministration', this.isNewOrDeleted());

            this.cvisitsTabGrid.MrId = entity.Mrid;
            this.cvitalsignsGrid.MrId = entity.Mrid;
            this.cpatienthistoryGrid.MrId = entity.Mrid;
            this.cphysicalexaminationGrid.MrId = entity.Mrid;
            this.clabtestsGrid.MrId = entity.Mrid;
            this.cimagingsGrid.MrId = entity.Mrid;
            this.cdiagnosisGrid.MrId = entity.Mrid;
            this.cmedprescriptionsGrid.MrId = entity.Mrid;
            this.crecommendationsGrid.MrId = entity.Mrid;
            this.cbloodtransfusionsGrid.MrId = entity.Mrid;
            //this.cmedadministrationGrid.MrId = entity.Mrid;
        }
    }
}