
namespace EMR.OPD {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class VisitsDialog extends Serenity.EntityDialog<VisitsRow, any> {
        protected getFormKey() { return VisitsForm.formKey; }
        protected getIdProperty() { return VisitsRow.idProperty; }
        protected getLocalTextPrefix() { return VisitsRow.localTextPrefix; }
        protected getNameProperty() { return VisitsRow.nameProperty; }
        protected getService() { return VisitsService.baseUrl; }

        protected form = new VisitsForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
        }

        private vitalsignGrid: VitalSignsTabGrid;
        private patienthistoryGrid: PatientHistoryTabGrid;
        private physicalexaminationGrid: PhysicalExaminationTabGrid;
        private labtestGrid: LabTestTabGrid;
        private medprescriptionsGrid: PrescriptionsTabGrid;
        private imagingGrid: ImagingsTabGrid;
        private recommendationsGrid: RecommedationsTabGrid;
        private diagnosisGrid: DiagnosisTabGrid;
        //private schedulesGrid: SchedulesTabGrid;
        private bloodTransfusionGrid: OpdBloodTransfusionsTabGrid;
        

        private loadedState: string;


        constructor() {
            super();

            this.vitalsignGrid = new VitalSignsTabGrid(this.byId('VitalSignsGrid'));
            this.vitalsignGrid.openDialogsAsPanel = true;

            this.patienthistoryGrid = new PatientHistoryTabGrid(this.byId('PatientHistoryGrid'));
            this.patienthistoryGrid.openDialogsAsPanel = true;

            this.physicalexaminationGrid = new PhysicalExaminationTabGrid(this.byId('PhysicalExaminationGrid'));
            this.physicalexaminationGrid.openDialogsAsPanel = true;

            this.labtestGrid = new LabTestTabGrid(this.byId('LabTestGrid'));
            this.labtestGrid.openDialogsAsPanel = true;

            this.medprescriptionsGrid = new PrescriptionsTabGrid(this.byId('PrescriptionsGrid'));
            this.medprescriptionsGrid.openDialogsAsPanel = true;

            this.imagingGrid = new ImagingsTabGrid(this.byId('ImagingsGrid'));
            this.imagingGrid.openDialogsAsPanel = true;

            this.recommendationsGrid = new RecommedationsTabGrid(this.byId('RecommedationsGrid'));
            this.recommendationsGrid.openDialogsAsPanel = true;

            this.diagnosisGrid = new DiagnosisTabGrid(this.byId('DiagnosisGrid'));
            this.diagnosisGrid.openDialogsAsPanel = true;
            
            //this.schedulesGrid = new SchedulesTabGrid(this.byId('VschedulingGrid'));
            //this.schedulesGrid.openDialogsAsPanel = true;    
            
            this.bloodTransfusionGrid = new OpdBloodTransfusionsTabGrid(this.byId('OpdBloodTransfusionsGrid'));
            this.bloodTransfusionGrid.openDialogsAsPanel = true;


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

        loadEntity(entity: VisitsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'VitalSigns', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'PatientHistory', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'LabTest', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'PhysicalExamination', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Prescriptions', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Imagings', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Recommedations', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Diagnosis', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'OpdBloodTransfusions', this.isNewOrDeleted());
            //Serenity.TabsExtensions.setDisabled(this.tabs, 'Vscheduling', this.isNewOrDeleted());


            this.vitalsignGrid.VisitId = entity.VisitId == null ? null : entity.VisitId;
            this.patienthistoryGrid.VisitId = entity.VisitId == null ? null : entity.VisitId;
            this.physicalexaminationGrid.VisitId = entity.VisitId == null ? null :  entity.VisitId;
            this.labtestGrid.VisitId = entity.VisitId == null ? null : entity.VisitId;
            this.medprescriptionsGrid.VisitId = entity.VisitId == null ? null :  entity.VisitId;
            this.imagingGrid.VisitId = entity.VisitId == null ? null : entity.VisitId;
            this.recommendationsGrid.VisitId = entity.VisitId == null ? null : entity.VisitId;
            this.diagnosisGrid.VisitId = entity.VisitId == null ? null : entity.VisitId;
            //this.schedulesGrid.VisitId = entity.VisitId == null ? null : entity.VisitId;
            this.bloodTransfusionGrid.VisitId = entity.VisitId == null ? null : entity.VisitId;
        }

    }
}