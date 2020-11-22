
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblNbResult]")]
    [DisplayName("Newborn Result"), InstanceName("Result")]
    [ReadPermission(PermissionKeys.TblNbResult.View)]
    [ModifyPermission(PermissionKeys.TblNbResult.Update)]
    [InsertPermission(PermissionKeys.TblNbResult.Insert)]
    [DeletePermission(PermissionKeys.TblNbResult.Delete)]
    [LookupScript("Configs.TblNbResult")]
    public sealed class TblNbResultRow : Row, IIdRow, INameRow
    {
        [DisplayName("Nb Result Id"), PrimaryKey]
        public Int32? NbResultId
        {
            get { return Fields.NbResultId[this]; }
            set { Fields.NbResultId[this] = value; }
        }

        [DisplayName("Nb Result Dari"), Size(50), QuickSearch]
        public String NbResultDari
        {
            get { return Fields.NbResultDari[this]; }
            set { Fields.NbResultDari[this] = value; }
        }

        [DisplayName("Nb Result Pashto"), Size(50)]
        public String NbResultPashto
        {
            get { return Fields.NbResultPashto[this]; }
            set { Fields.NbResultPashto[this] = value; }
        }

        [DisplayName("Nb Result En"), Size(50)]
        public String NbResultEn
        {
            get { return Fields.NbResultEn[this]; }
            set { Fields.NbResultEn[this] = value; }
        }

        [DisplayName("Nb Result"), Size(50),Expression("t0.[NbResultEn]+' - '+t0.[NbResultDari]")]
        public String NbResult
        {
            get { return Fields.NbResult[this]; }
            set { Fields.NbResult[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.NbResultId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NbResult; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblNbResultRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field NbResultId;
            public StringField NbResultDari;
            public StringField NbResultPashto;
            public StringField NbResultEn;
            public StringField NbResult;
        }
    }
}
