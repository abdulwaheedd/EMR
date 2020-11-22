
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblOutcomesMother]")]
    [DisplayName("Outcomes"), InstanceName("Outcome")]
    [ReadPermission(PermissionKeys.TblOutcomesMother.View)]
    [ModifyPermission(PermissionKeys.TblOutcomesMother.Update)]
    [InsertPermission(PermissionKeys.TblOutcomesMother.Insert)]
    [DeletePermission(PermissionKeys.TblOutcomesMother.Delete)]
    [LookupScript("Configs.TblOutcomesMother")]
    public sealed class TblOutcomesMotherRow : Row, IIdRow, INameRow
    {

        [DisplayName("Outcome Id"), Column("OutcomeID"), Identity]
        public Int32? OutcomeId
        {
            get { return Fields.OutcomeId[this]; }
            set { Fields.OutcomeId[this] = value; }
        }

        [DisplayName("Outcome (English)"),NotNull, Size(255), QuickSearch]
        public String OutcomeEng
        {
            get { return Fields.OutcomeEng[this]; }
            set { Fields.OutcomeEng[this] = value; }
        }

        [DisplayName("Outcome (Dari)"),NotNull, Size(50)]
        public String OutcomeDari
        {
            get { return Fields.OutcomeDari[this]; }
            set { Fields.OutcomeDari[this] = value; }
        }
        
        [DisplayName("Outcome Name"), Size(50),Expression("t0.[OutcomeEng]+' - '+t0.[OutcomeDari]")]
        public String OutcomeName
        {
            get { return Fields.OutcomeName[this]; }
            set { Fields.OutcomeName[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.OutcomeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OutcomeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblOutcomesMotherRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field OutcomeId;

            public StringField OutcomeEng;

            public StringField OutcomeDari;
            public StringField OutcomeName;

		}
    }
}
