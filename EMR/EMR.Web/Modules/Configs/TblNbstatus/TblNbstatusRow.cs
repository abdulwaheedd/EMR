
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblNbstatus]")]
    [DisplayName("Newborn Status"), InstanceName("Status")]
    [ReadPermission(PermissionKeys.TblNbstatus.View)]
    [ModifyPermission(PermissionKeys.TblNbstatus.Update)]
    [InsertPermission(PermissionKeys.TblNbstatus.Insert)]
    [DeletePermission(PermissionKeys.TblNbstatus.Delete)]
    [LookupScript("Configs.TblNbstatus")]
    public sealed class TblNbstatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Nbstatus Id"), PrimaryKey]
        public Int32? NbstatusId
        {
            get { return Fields.NbstatusId[this]; }
            set { Fields.NbstatusId[this] = value; }
        }

        [DisplayName("Nbstatus Dari"), Size(50), QuickSearch]
        public String NbstatusDari
        {
            get { return Fields.NbstatusDari[this]; }
            set { Fields.NbstatusDari[this] = value; }
        }

        [DisplayName("Nbstatus Pashto"), Size(50)]
        public String NbstatusPashto
        {
            get { return Fields.NbstatusPashto[this]; }
            set { Fields.NbstatusPashto[this] = value; }
        }

        [DisplayName("Nbstatus Eng"), Size(50)]
        public String NbstatusEng
        {
            get { return Fields.NbstatusEng[this]; }
            set { Fields.NbstatusEng[this] = value; }
        }
        [DisplayName("Nb Status"), Size(100),Expression("t0.[NbstatusEng]+' - '+t0.[NbstatusDari]")]
        public String NbStatus
        {
            get { return Fields.NbStatus[this]; }
            set { Fields.NbStatus[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.NbstatusId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NbStatus; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblNbstatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field NbstatusId;
            public StringField NbstatusDari;
            public StringField NbstatusPashto;
            public StringField NbstatusEng;
            public StringField NbStatus;
        }
    }
}
