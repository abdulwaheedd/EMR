
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[LkpImaging]")]
    [DisplayName("Imagings"), InstanceName("Imaging")]
    [ReadPermission(PermissionKeys.LkpImaging.View)]
    [ModifyPermission(PermissionKeys.LkpImaging.Update)]
    [InsertPermission(PermissionKeys.LkpImaging.Insert)]
    [DeletePermission(PermissionKeys.LkpImaging.Delete)]
    [LookupScript("Configs.LkpImaging")]
    public sealed class LkpImagingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Imaging Id"), Identity]
        public Int32? ImagingId
        {
            get { return Fields.ImagingId[this]; }
            set { Fields.ImagingId[this] = value; }
        }

        [DisplayName("Imagin Name"), Size(100), QuickSearch]
        public String ImagingName
        {
            get { return Fields.ImagingName[this]; }
            set { Fields.ImagingName[this] = value; }
        }

        [DisplayName("Note"), Size(500)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ImagingId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ImagingName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpImagingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ImagingId;
            public StringField ImagingName;
            public StringField Note;
        }
    }
}
