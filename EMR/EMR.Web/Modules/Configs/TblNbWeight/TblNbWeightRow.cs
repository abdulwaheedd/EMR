
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblNbWeight]")]
    [DisplayName("Newborn Weight Status"), InstanceName("Weight status")]
    [ReadPermission(PermissionKeys.TblNbWeight.View)]
    [ModifyPermission(PermissionKeys.TblNbWeight.Update)]
    [InsertPermission(PermissionKeys.TblNbWeight.Insert)]
    [DeletePermission(PermissionKeys.TblNbWeight.Delete)]
    [LookupScript("Configs.TblNbWeight")]
    public sealed class TblNbWeightRow : Row, IIdRow, INameRow
    {
        [DisplayName("Nb Weight Id"), PrimaryKey]
        public Int32? NbWeightId
        {
            get { return Fields.NbWeightId[this]; }
            set { Fields.NbWeightId[this] = value; }
        }

        [DisplayName("Nb Weight Dari"), Size(50), QuickSearch]
        public String NbWeightDari
        {
            get { return Fields.NbWeightDari[this]; }
            set { Fields.NbWeightDari[this] = value; }
        }

        [DisplayName("Nb Weight Pashto"), Size(50)]
        public String NbWeightPashto
        {
            get { return Fields.NbWeightPashto[this]; }
            set { Fields.NbWeightPashto[this] = value; }
        }

        [DisplayName("Nb Weight En"), Size(50)]
        public String NbWeightEn
        {
            get { return Fields.NbWeightEn[this]; }
            set { Fields.NbWeightEn[this] = value; }
        }
        [DisplayName("Nb Weight"), Size(100),Expression("t0.[NbWeightEn] +' - '+ t0.[NbWeightDari]")]
        public String NbWeight
        {
            get { return Fields.NbWeight[this]; }
            set { Fields.NbWeight[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.NbWeightId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NbWeight; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblNbWeightRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field NbWeightId;
            public StringField NbWeightDari;
            public StringField NbWeightPashto;
            public StringField NbWeightEn;
            public StringField NbWeight;
        }
    }
}
